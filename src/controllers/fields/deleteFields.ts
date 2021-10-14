import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function deleteField (req: Express.Request, res: Express.Response){
    try{
        let fieldId = parseInt(req.params.id)
        
        await prisma.fieldCharacteristics.delete({
            where:{
                fieldId:fieldId
            },

        });
        await prisma.timeTable.deleteMany({
            where:{
                fieldId:fieldId
            },

        });
        await prisma.field.delete({
            where:{
                id:fieldId
            },

        });

       res.json("field was successfully eliminated")
    }
    catch(e){
        console.log('error de eliminacion de cancha', e)
    };

};

export default deleteField;