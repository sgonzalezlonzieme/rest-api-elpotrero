import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import User from './type'


async function putUser (req: Express.Request, res: Express.Response){
    try{
        let userId = parseInt(req.params.id)
        const user: User = req.body
        

        if(Object.keys(user.player).length === 1){
            const updateUser = await prisma.user.update({
                where:{
                    id: userId
                },
                data:{
                    player:{ 
                        update:{
                            available: user.player.available
                        }
                    }
                }    
            })
            return res.json(updateUser)
        }
        else{
        const updateUser = await prisma.user.update({
            where:{
                id:userId
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
                password: user.password,
                player: {
                    update: {
                        position: user.player.position,
                        qualification: user.player.qualification,
                        votes: user.player.votes
                    }
                }
            }

        })
       return res.json(updateUser)
    }}
    catch(e){
        console.log('error de actualizacion de cancha', e)
    }

} 

export default putUser