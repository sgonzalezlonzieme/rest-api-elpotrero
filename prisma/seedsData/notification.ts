import { Prisma } from "@prisma/client";

const notifications:Prisma.NotificationCreateInput[] = [
    {
        day:"11/10/2021",
        hour:"10:00",
        duration:1,
        player:{    
            connect:{
                id:1
            }
        },
        team: {
            connect:{
                id:2
            }
        },
    },

    {
        day:"12/10/2021",
        hour:"12:00",
        duration:1,
        player:{    
            connect:{
                id:1
            }
        },
        team: {
            connect:{
                id:2
            }
        },
    },
    {
        day:"14/10/2021",
        hour:"15:00",
        duration:1,
        player:{    
            connect:{
                id:33
            }
        },
        team: {
            connect:{
                id:2
            }
        },
    },
    {   
        day:"16/10/2021",
        hour:"13:00",
        duration:1,
        player:{    
            connect:{
                id:1
            }
        },
        team: {
            connect:{
                id:2
            }
        },
    },
    {
        day:"17/10/2021",
        hour:"18:00",
        duration:1,
        player:{    
            connect:{
                id:33
            }
        },
        team: {
            connect:{
                id:2
            }
        },
    },

]

export default notifications
    