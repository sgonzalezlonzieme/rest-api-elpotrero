import passport from "passport";
import Express from "express"
import { User } from ".prisma/client";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import jwt from 'jsonwebtoken'
import config from '../../config/config'

export default async function getLoginGoogle(req: Express.Request, res: Express.Response){
          
        const user: any = req.body

        // const userFind = await prisma.user.findFirst({
        //     where: {id: user.id}
        // })//MEJORAR EL CODIGO PARA QUE NO HAGA EL UPDATE SI NO ES NECESARIO


        //DEVOLVER MENSAJE SI YA EXISTE EL UNIQUE

        const googleUser = await prisma.user.update({
            where:{
                id: user.id
            },
            data:{
                name: user.name,
                userName: user.userName,
                gender: user.gender,
                dni: user.dni,
                birthday: user.birthday,
                cellphone: user.cellphone,
                mail: user.mail,
                image: user.image,  
                player: {
                    update: {
                        position: user.player.position,
                    }
                }
            }

        })

        const token = jwt.sign({id: user.id}, config.jwtSecret,
            { expiresIn: "60m"})

        res.send({...googleUser, token: token})
}