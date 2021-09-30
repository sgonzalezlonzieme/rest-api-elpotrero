import Express from 'express'
import  User  from './type'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function postUser (req: Express.Request, res: Express.Response){
    try{
        const user: User = req.body
         
        const newUser = await prisma.user.create({
            data: {
                name: user.name,
                userName: user.userName,
                gender: user.gender,
                dni: user.dni,
                birthday: user.birthday,
                cellphone: user.cellphone,
                mail: user.mail,
                image: user.image,
                password: user.password,
                player: {
                    create: {
                        position: user.player.position,
                        qualification: user.player.qualification,
                    }
                }
            }
        })

        res.json(newUser)

    }catch(error){
        res.status(404).send({mensaje: "Error en el post de user", error: error})
    }
   
}

export default postUser