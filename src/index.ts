import Express from 'express'
import morgan from 'morgan'
import router from './routes'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

const app = Express()

// middlewares
app.use(morgan('tiny'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))
app.use(passport.initialize())
passport.use(passportMiddleware)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  
app.use(router)
// levantamos nuestro servidor en el puerto 3000
app.listen(3001, () => console.log('Server on port 3001'))


