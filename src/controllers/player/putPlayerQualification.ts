import  Express  from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function putPlayerQualification(req: Express.Request, res: Express.Response) {
    
        const {id, qualification} = req.body

        const playerFound = await prisma.player.findFirst({
              where: {
                  id: id,
              },
          })
          
        const newQualification: number =  playerFound?.qualification + qualification
        const newVotes: number | undefined = playerFound?.votes ? playerFound?.votes + 1 :
        playerFound?.votes
        
        const newQualificationPlayer = await prisma.player.update({
            where: {
                id: id
            },
            data: {
                qualification: newQualification,
                votes: newVotes 
             }
        })

        res.send(newQualificationPlayer)
          
}

export default putPlayerQualification