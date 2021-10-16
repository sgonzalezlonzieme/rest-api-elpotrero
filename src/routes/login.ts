import Express from 'express';
const router = Express.Router();
import passport from 'passport';
import postLogin from '../controllers/login/postLoginLocal'
import putGoogleLogin from '../controllers/login/putLoginGoogle'


router.post('/local', postLogin)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }), 
(req, res) => {

    res.cookie("user", req.user)
    res.redirect(`http://localhost:8080/googleForm`)
    
})

router.put('/googleLogin', putGoogleLogin)

export default router