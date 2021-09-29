import Express from 'express'
import morgan from 'morgan'
import router from './routes'

const app = Express()

// middlewares
app.use(morgan('tiny'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))

app.use(router)
// levantamos nuestro servidor en el puerto 3000
app.listen(3000, () => console.log('Server on port 3000'))


