import { Prisma } from "@prisma/client";

const notifications:Prisma.NotificationCreateInput[] = [
    {
        day:"11/10/2021",
        hour:"10:00",
        duration:1,
        playerId: 2,
        team: {
            connect:{
                id:1
            }
        },
    },

    {
        day:"12/10/2021",
        hour:"11:00",
        duration:1,
        playerId: 2,
        team: {
            connect:{
                id:1
            }
        },
    },
    {
        day:"11/10/2021",
        hour:"10:00",
        duration:1,
        playerId: 1,
        team: {
            connect:{
                id:2
            }
        },
    },
    {
        day:"11/10/2021",
        hour:"10:00",
        duration:1,
        playerId: 1,
        team: {
            connect:{
                id:2
            }
        },
    },

]

export default notifications
    