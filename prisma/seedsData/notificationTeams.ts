import { Prisma } from "@prisma/client";

const notificationTeams:Prisma.NotificationTeamsCreateInput[] = [
    {

        player:{    
            connect:{
                id:44
            }
        },
        team: {
            connect:{
                id:1
            }
        },
    },

    {

        player:{    
            connect:{
                id:44
            }
        },
        team: {
            connect:{
                id:1
            }
        },
    },
    {

        player:{    
            connect:{
                id:45
            }
        },
        team: {
            connect:{
                id:1
            }
        },
    },
    {   
        player:{    
            connect:{
                id:46
            }
        },
        team: {
            connect:{
                id:1
            }
        },
    },
    {

        player:{    
            connect:{
                id:44
            }
        },
        team: {
            connect:{
                id:1
            }
        },
    },

]

export default notificationTeams
    