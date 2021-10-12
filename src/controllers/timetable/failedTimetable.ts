import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function deleteTimetable (req: Express.Request, res: Express.Response){
    try{
        let id = req.params.id
        let timetableId = parseInt(id)
        
        await prisma.timeTable.delete({
            where:{
                id:timetableId
            },

        })

       res.redirect(`http://localhost:3001/failed`)
    }
    catch(e){
        console.log('error de eliminacion de cancha', e)
    }

} 

export default deleteTimetable