import {Strategy, ExtractJwt, StrategyOptions} from "passport-jwt";
import config from "../config/config";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

export default new Strategy(options, async (payload, done) => {
     //FALTA EL TRY CATCH
     const user = await prisma.user.findFirst({
         where: {
             id: payload.id
         }
        })
        
        if(user){
            return done(null, user)
        }
        
        return done(null, false, { message: 'Usted no está autorizado'});
})
