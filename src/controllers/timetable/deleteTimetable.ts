import Express from 'express'
import { PrismaClient } from '@prisma/client'
import deleteTime from './functions/deleteTime'

const prisma = new PrismaClient()

async function deleteTimetable (req: Express.Request, res: Express.Response){

    let timetableId = parseInt(req.params.id);
    

    deleteTime(timetableId);

    res.json("timetable was successfully deleted");

};

export default deleteTimetable;


// CON DOS PARAMETROS 

// async function deleteTimetable (req: Express.Request, res: Express.Response){

//     let timetableId = parseInt(req.params.id);
//     let mercadopago = req.params.mercadopago
    

//     try{

//         await prisma.timeTable.delete({
//             where:{
//                 id:timetableId
//             },

//         });

//         if(mercadopago === ""){
//         res.json("timetable was successfully deleted");
//         }
//         else{
//             res.json('ok')
//         }
//     }
//     catch(e){
//         console.log('error in deleting timetable', e)
//     }


// };

// export default deleteTimetable;