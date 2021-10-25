import Express from 'express'
import morgan from 'morgan'
import router from './routes'
import passport from 'passport'
import LocalStrategy from './passport/localStrategy'
import GoogleStrategy from './passport/googleStrategy'
var cookieParser = require('cookie-parser');

const app = Express()
app.use(cookieParser({
  maxAge: 24 * 60 * 60 * 1000,
  keys: "Secret"
}));
// middlewares
app.use(morgan('tiny'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))
app.use(passport.initialize())
passport.use(LocalStrategy)
passport.use(GoogleStrategy)


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(router)
// levantamos nuestro servidor en el puerto 3000
app.listen(process.env.PORT || 3001, () => console.log('Server on port 3001'))


