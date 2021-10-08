import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config/config'

function createToken(user: any){
    //CONFIGURAR EL TIEMPO DE SESIÓN
      return jwt.sign({id: user.id, password: user.password}, config.jwtSecret,
        { expiresIn: "60m"})
}

async function postLogin(req: Express.Request, res: Express.Response ) {
        
        //type userLogin
        const userData: any = req.body  

        if(!userData.password || !userData.mail){
            return res.status(404).send("Faltan ingresar datos")
        }
       
        const user = await prisma.user.findFirst({
              where: {
                 mail: userData.mail
              }
        })

        if(!user){
            return res.status(404).send("El usuario no existe")
        } 

        const isMatch = await bcrypt.compare(userData.password, user.password)
        
        if(isMatch){
             
            const createdToken: string = createToken(userData)
         
            return res.status(200).json(createdToken)
        }
      
        return res.status(400).json("El contraseña son incorrecta")

}

export default postLogin