import Express from "express"
import jwt from 'jsonwebtoken'
import config from '../../config/config'


export default async function postLoginGoogle(req: Express.Request, res: Express.Response){
            
         const user: any = req.body
    
         const token = jwt.sign({id: user.id}, config.jwtSecret,
            { expiresIn: "60m"})

        return res.send({...user, token: token})
}
