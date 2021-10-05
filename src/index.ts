import Express from 'express'
import morgan from 'morgan'
import router from './routes'

const app = Express()

// middlewares
app.use(morgan('tiny'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// app.post('/createField', async (req, res) => {
     
//     const field = await prisma.field.create({
//           data: {
//             number: "ONE",
//             cost: 132142141223,
//             image: "URL",
//             description: "La mejor"
//           }
//     })
//     res.json(field)
// })

// app.post('/createTime', async (req, res) => {
     
//     const field = await prisma.timeTable.create({
//           data: {
//             hour: "20:00hs",
//             day: "05/11/2021"
//           }
//     })
//     res.json(field)
// })

// app.post('/createFieldTable', async (req, res) => {
     
//     const field = await prisma.field_Timetable.create({
//           data: {
//             fieldId: 1,
//             timetableId: 1,
//           }
//     })
//     res.json(field)
// })

// app.get('/getField', async (req, res) => {
     
//     const Relation = await prisma.field_Timetable.findFirst({
//         where: {
//             id: 1
//         },
//         include: {
//             field: true,
//             timetable: true,
//         }
//     })
//     res.json(Relation)
// })

  
app.use(router)
// levantamos nuestro servidor en el puerto 3000
app.listen(3001, () => console.log('Server on port 3001'))


