import Express from "express";
const router = Express.Router();
import passport from "passport";
import postLoginLocal from "../controllers/login/postLoginLocal";
import putGoogleLogin from "../controllers/login/putLoginGoogle";
import postGoogleLogin from "../controllers/login/postGoogle";

router.post("/local", postLoginLocal);
router.put("/googleFormLogin", putGoogleLogin);
router.post("/googleLogin", postGoogleLogin);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    res.cookie("user", req.user);
    res.redirect(`https://deploy-potrero.vercel.app/googleForm`);
  }
);

export default router;
