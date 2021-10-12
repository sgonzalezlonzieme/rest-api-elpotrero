import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function deleteTime (timetableId:number){
    
    try{
        await prisma.timeTable.delete({
            where:{
                id:timetableId
            },

        })
    }
    catch(e){
        console.log('error in deleting timetable', e)
    }
    }


export default deleteTime