import Express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import jwt from 'jsonwebtoken'
import config from '../../config/config'
import User from "../user/type"


export default async function putLoginGoogle(req: Express.Request, res: Express.Response){
        //EN EL FRONT LA PRIMERA VEZ TODOS LOS DATOS SON OBLIGATORIOS
        //LUEGO YA TENDRÍA QUE HACER EL PUT DE CATU DENTRO DE LA PÁGINA
        //LA SEGUNDA VEZ SE USA LA RUTA POSTLOGINGOOGLE
        const user: User = req.body //TYPE USER

        //DEVOLVER MENSAJE SI YA EXISTE EL UNIQUE

            const userDni = await prisma.user.findFirst({
                where: {dni: user.dni}
            })
    
            if(userDni){
                return res.send("El dni ya existe en la base de datos")
            }
    
            const userMail = await prisma.user.findFirst({
                where: {mail: user.mail}
            })
    
            if(userMail){
                return res.send("El mail ya existe en la base de datos")
            }
    
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
    
            return res.send({...googleUser, token: token})
     
}