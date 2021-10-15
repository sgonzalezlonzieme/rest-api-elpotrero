import Express from 'express';
const router = Express.Router();
import passport from 'passport';
import postLogin from '../controllers/login/postLoginLocal'



router.post('/local', postLogin)
router.post('/google', )


router.get('/google', passport.authenticate('google', { scope: ['profile'] }), 
(req, res) => {

    res.cookie("user", req.user)
    res.redirect(`http://localhost:8080/googleForm`)
    
})

// router.get('/googleFront', 
// (req, res) => {
   
//     res.send("FORMULARIO")
   
// })

// router.get('/googleprueba', 
// (req, res) => {
//     console.log("Logueado en google prueba")
//     res.send(req.user)
// })
//Voy a tener una ruta que va a ser solo para loguearse, de ahí me voy a una página
//de bienvenida que me redireccione al form para llenar los datos que faltan
//y en esa misma página voy previa, voy a tener una action que me guarde en el 
//state al usuario

export default router