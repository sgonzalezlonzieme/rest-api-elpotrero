import { Notification } from ".prisma/client"

export default interface Notification {
    day: string,
    hour: string,
    duration: number,
    player:Player,
    attending: string,
    createdAt: any,
    user: User
}