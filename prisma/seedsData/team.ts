import { Prisma } from "@prisma/client";

const team: Prisma.TeamCreateInput[] = [
    {
    name: "Boca",
    image: "url",
    qualification: 5,
    votes: 2,
    user: {
        connect:{
            id:1
        }
    },
    available:false,
    player:{
        connect:[
            {id:1},
            {id:2}
        ]
    },
    },
    {
    name: "River",
    image: "url",
    qualification: 12,
    votes: 3,
    available:false,
    user: {
        connect:{
            id:2
        }
    },
    player:{
        connect:[
            {id:3},
            {id:4}
        ]
    },
    },
    {
    name: "San Lorenzo",
    image: "url",
    qualification: 17,
    votes: 4,
    user: {
        connect:{
            id:3
        }
    },
    player:{
        connect:[
            {id:1},
            {id:2}
        ]
    },
    },   
    {
    name: "Ferro",
    image: "url",
    qualification: 17,
    votes: 5,
    user: {
        connect:{
            id:4
        }
    },
    player:{
        connect:[
            {id:2},
            {id:3}
        ]
    },
    },
]

export default team

    // create: [
    //     {
    //       tag: {
    //         connect: { name: 'redwoodjs' },
    //       },
    //     }