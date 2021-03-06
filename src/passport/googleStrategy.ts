import passportGoogle from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import passport from "passport";

const GoogleStrategy = passportGoogle.Strategy;

export default new GoogleStrategy(
  {
    clientID:
      "33800208115-2pms7bineeq06gocreojqfg5vmveumdp.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google", //Ver como se llama y cambiar en credentials
    passReqToCallback: true,
    proxy: true,
  },
  async (req, accessToken, refreshToken, profile, cb) => {
    const defaultUser = {
      googleId: profile.id,
      name: `${profile.name?.givenName} ${profile.name?.familyName}`,
      mail: profile._json.email,
      image: profile._json.picture,
    };

    const userDb = await prisma.user.findFirst({
      where: { googleId: defaultUser.googleId },
    });

    if (userDb) {
      return cb(null, userDb);
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
          },
        },
      },
    });

    return cb(null, user);
  }
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
