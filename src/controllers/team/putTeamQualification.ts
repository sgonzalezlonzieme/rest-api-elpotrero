import Express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function putTeamQualification(req: Express.Request, res: Express.Response) {
              
        const {id, qualification} = req.body

        const teamFound = await prisma.team.findFirst({
            where: {
                id: id
            }
        })

        const newQualification: number = teamFound?.qualification + qualification
        const newVotes: number | undefined = teamFound?.votes ? teamFound?.votes + 1 :
        teamFound?.votes

        const newQualificationTeam = await prisma.team.update({
            where: {
                id: id
            },
            data: {
                qualification: newQualification,
                votes: newVotes
            }
        })

        res.send(newQualificationTeam)
}

export default putTeamQualification