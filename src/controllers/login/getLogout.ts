import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function  getLogout(req: Express.Request, res: Express.Response) {

    let id: string = req.params.id 

    let userId: number = parseInt(id)
    
    const logout = await prisma.user.update({
        where: {id: userId},
        data: { 
            token: "logout done"
        }
    }) 

     res.send({token: logout.token})

}

export default getLogout