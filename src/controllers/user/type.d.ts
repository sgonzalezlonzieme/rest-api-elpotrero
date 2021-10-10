import { Gender } from ".prisma/client"
import { Player } from ".prisma/client"

export default interface User {
    id?: number,
    name: string,
    userName: string,
    gender: Gender | null | undefined, //ver si manda el enum como string
    dni: number,
    birthday: string, //Ver como llega del front
    cellphone: number,
    mail: string, //Ver como llega del front
    image: string, //Ver como llega del front
    password: string, //Ver como generar el hash - Ver passport
    player: Player,
}

