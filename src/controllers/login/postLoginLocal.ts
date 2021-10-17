import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config/config'
import {TokenData, LoginData} from './type'


function createToken(user: TokenData){
    //CONFIGURAR EL TIEMPO DE SESIÓN
      return jwt.sign({id: user.id}, config.jwtSecret,
        { expiresIn: "60m"})
}

async function postLogin(req: Express.Request, res: Express.Response ) {
        console.log(req)
        //type userLogin
        const userData: LoginData = req.body  

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

        const isMatch: boolean = await bcrypt.compare(userData.password, user.password)
        
        
        if(isMatch){
             
            const createdToken: string = createToken(userData)
         
            return res.status(200).json({...user, token: createdToken})
        }
      
        return res.status(400).json("La contraseña es incorrecta")

}

export default postLogin