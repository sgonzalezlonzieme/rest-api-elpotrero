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

//    model User {
    //     id Int @id @default(autoincrement())
    //     name String 
    //     userName String @unique
    //     gender Gender
    //     dni Int @unique
    //     birthday String? //Fijarse el tipo de dato de Date, y hablarlo con el front.
    //     cellphone Int 
    //     mail String @unique//Ver si es unique para el ingreso o solo por name
    //     image String?
    //     password String //Fijarse en la documentación que posibilidades hay 
    //     player Player @relation(fields: [playerId], references: [id])
    //     playerId Int
    //   }