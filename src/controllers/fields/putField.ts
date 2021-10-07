import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Field from './type'


async function putField (req: Express.Request, res: Express.Response){
    try{
        let id = req.params.id
        let fieldId = parseInt(id)
        const field: Field = req.body

        const updateField = await prisma.field.update({
            where:{
                id:fieldId
            },
            data:{
                name:field.name
            }

        })
       res.json(updateField)
    }
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default putField