import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Field from './type'


async function postField (req: Express.Request, res: Express.Response){
    try{
        const field: Field = req.body

        const newField = await prisma.field.create({
            data:{
                name: field.name,
                address: field.address,
                inicialTime: field.inicialTime,
                endTime: field.endTime,
                cost: field.cost,
                image: field.image,
                fieldCharacteristics:{
                    create:{
                        floorType: field.fieldCharacteristics.floorType,
                        light: field.fieldCharacteristics.light,
                        soccerField: field.fieldCharacteristics.soccerField,
                        roofed: field.fieldCharacteristics.roofed
                    }
                }
            },

        })
       res.json(newField)
    }
    catch(e){
        console.log('error de carga de nueva cancha', e)
    }

} 

export default postField