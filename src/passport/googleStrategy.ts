import passportGoogle from 'passport-google-oauth20'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient() 
import passport from 'passport'

const GoogleStrategy = passportGoogle.Strategy

export default new GoogleStrategy({
    clientID: "653542961605-hhhqumktukgektmpv755mlmm9cec1ncd.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/auth/google", //Ver como se llama y cambiar en credentials
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, cb) => {

    const defaultUser = {
        googleId: profile.id,
        name: `${profile.name?.givenName} ${profile.name?.familyName}`,
        mail: profile._json.email,
        image: profile._json.picture
    }
    // console.log("DEFAULTUSER USERNAME", defaultUser.userName)
    //VER QUE INFORMACIÓN LE PUEDO SACAR AL PROFILE, VER COMO SACAR EL USERNAME SI 
    //NO VIENE, Y CONFIGURAR PARA QUE LLEGUE LA IMAGEN
    console.log(
   "PROFILE DETAILS", 
    profile,
    "MAIIILL",
    profile.emails
    )

    const userDb = await prisma.user.findFirst({
        where: {googleId: defaultUser.googleId}
    })
    
    if(userDb){
       return cb(null, userDb)
    }

    const user = await prisma.user.create({
        data: {
            name: defaultUser.name,
            googleId: defaultUser.googleId,
            mail: defaultUser.mail,
            image: defaultUser.image,
            player: {
                create: {
                    position: "GOALKEEPER",
                }
            }
        }
    })
   
    return cb(null, user)
  })
  
  
  passport.serializeUser((user, cb) => {
      cb(null, user)
  })
  
 
  