import { NotificationTeams, Team } from ".prisma/client"

export default interface Notification {
    player:Player,
    attending: string,
    createdAt: any,
    team: Team,
    user: User
}