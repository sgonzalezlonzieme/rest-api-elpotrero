import Express from 'express'
import  User  from './type'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

async function postUser (req: Express.Request, res: Express.Response){
      
    try{
        const user: User = req.body

        const findUser = await prisma.user.findFirst({
            where: {
                mail: user.mail
            } 
        })
         
        if(findUser){
            res.send('El usuario ya existe')
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash

        //await bcrypt.compare(user.password, user.password)

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