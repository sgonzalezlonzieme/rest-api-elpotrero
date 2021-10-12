import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function deleteUser (req: Express.Request, res: Express.Response){
    try{
        let id = req.params.id
        let userId = parseInt(id)

        await prisma.timeTable.deleteMany({
            where:{
                userId: userId
            },

        })
        await prisma.user.delete({
            where:{
                id: userId
            },

        })
        
        await prisma.player.delete({
            where:{
                id:userId
            },

        })


       res.json("user/player was successfully eliminated")
    }
    catch(e){
        console.log('error de eliminacion de cancha', e)
    }

} 

export default deleteUser