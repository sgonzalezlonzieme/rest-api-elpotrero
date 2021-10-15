import { Gender } from ".prisma/client"
import { Position } from ".prisma/client"

export default interface Player {
    id: number,
    name: string,
    gender: Gender | null | undefined,
    birthday: string,
    cellphone: number,
    mail: string,
    position: Position,
    qualification: number,
    votes: number,
    punctuation: number,
    available: boolean,
    image: string,
}