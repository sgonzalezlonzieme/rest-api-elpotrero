import { Prisma } from "@prisma/client";
const img = "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/246721314_10223753867867303_1359235114715575403_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHiQRam5DB0a4N0N8b9MxaMrRFOMM8mUEqtEU4wzyZQSlsE1tnFjR6RRpKaHn3eLQ4&_nc_ohc=IMzc8wsL-vMAX9KUPjp&_nc_ht=scontent.feze11-1.fna&oh=c0722c386816ce28a8825a0f38b151c5&oe=6195E926"

const team: Prisma.TeamCreateInput[] = [
    {
    name: "EL DECANO",
    image: img,
    qualification: 10,
    votes: 2,
    user: {
        connect:{
            id:1
        }
    },
    available:false,
    player:{
        connect:[
            {id:23},
            {id:13},
            {id:14},
            {id:15}
        ]
    },
    },
    {
    name: "EL DRINK TEAM",
    image: img,
    qualification: 20,
    votes: 3,
    available:true,
    user: {
        connect:{
            id:13
        }
    },
    player:{
        connect:[
            {id:17},
            {id:19},
            {id:20}
        ]
    },
    },
    {
    name: "MAL BICHO",
    image: img,
    qualification: 17,
    votes: 4,
    available:true,
    user: {
        connect:{
            id:21
        }
    },
    player:{
        connect:[
            {id:24},
            {id:26},
        ]
    },
    },   
    {
    name: "QUEMEROS FC",
    image: img,
    qualification: 17,
    votes: 5,
    available:true,
    user: {
        connect:{
            id:26
        }
    },
    player:{
        connect:[
            {id:32},
            {id:59},
            {id:66},
        ]
    },
    },
    {
        name: "CHELITO FC",
        image: img,
        qualification: 17,
        votes: 5,
        available:false,
        user: {
            connect:{
                id:38
            }
        },
        player:{
            connect:[
                {id:48},
                {id:54},
                {id:65},
                {id:73},
            ]
        },
    },
    {
        name: "A.C.D.",
        image: img,
        qualification: 17,
        votes: 5,
        available:false,
        user: {
            connect:{
                id:33
            }
        },
        player:{
            connect:[
                {id:49},
                {id:56},
                {id:67},
                {id:77},
            ]
        },
    },
    {
        name: "KABUL DEXTER",
        image: img,
        qualification: 100,
        votes: 20,
        available:true,
        user: {
            connect:{
                id:33
            }
        },
        player:{
            connect:[
                {id:90},
                {id:30},

            ]
        },
    },
    {
        name: "GRUPO HALCON",
        image: img,
        qualification: 25 ,
        votes: 5,
        available:true,
        user: {
            connect:{
                id:33
            }
        },
        player:{
            connect:[
                {id:41},
                {id:72},
                {id:44},

            ]
        },
    },
    {
        name: "LA GALERA FC",
        image: img,
        qualification: 21,
        votes: 8,
        available:false,
        user: {
            connect:{
                id:57
            }
        },
        player:{
            connect:[
                {id:64},
                {id:46},
                {id:53},
                {id:71},
            ]
        },
    },
    {
        name: "TIMAO FC",
        image: img,
        qualification: 21,
        votes: 8,
        available:true,
        user: {
            connect:{
                id:71
            }
        },
        player:{
            connect:[
                {id:91},
                {id:45},

            ]
        },
    },
    {
        name: "BERENJENEITOR",
        image: img,
        qualification: 30,
        votes: 9,
        available:true,
        user: {
            connect:{
                id:35
            }
        },
        player:{
            connect:[
                {id:42},
                {id:50},

            ]
        },
    },
    {
        name: "MAUER FC",
        image: img,
        qualification: 8,
        votes: 3,
        available:true,
        user: {
            connect:{
                id:55
            }
        },
        player:{
            connect:[
                {id:68},
                {id:34},

            ]
        },
    },
    {
        name: "FUTBOLICHE",
        image: img,
        qualification: 50,
        votes: 25,
        available:true,
        user: {
            connect:{
                id:36
            }
        },
        player:{
            connect:[
                {id:69},
                {id:3},

            ]
        },
    },
    {
        name: "EL BOSQUE",
        image: img,
        qualification: 7,
        votes: 5,
        available:true,
        user: {
            connect:{
                id:4
            }
        },
        player:{
            connect:[
                {id:5},
                {id:7},

            ]
        },
    },
    {
        name: "LA GLORIOSA LP",
        image: img,
        qualification: 3,
        votes: 1,
        available:true,
        user: {
            connect:{
                id:8
            }
        },
        player:{
            connect:[
                {id:9},
                {id:12},

            ]
        },
    },
// -------------------------------------------------
    {
        name: "DALMA MENEA",
        image: img,
        qualification: 10,
        votes: 2,
        user: {
            connect:{
                id:2
            }
        },
        available:false,
        player:{
            connect:[
                {id:39},
                {id:43},
                {id:87},
                {id:6}
            ]
        },
        },
        {
        name: "MIRAME MUEVO",
        image: img,
        qualification: 20,
        votes: 3,
        available:true,
        user: {
            connect:{
                id:43
            }
        },
        player:{
            connect:[
                {id:78},
                {id:60},
                {id:52}
            ]
        },
        },
        {
        name: "WASABI FC",
        image: img,
        qualification: 17,
        votes: 4,
        available:true,
        user: {
            connect:{
                id:10
            }
        },
        player:{
            connect:[
                {id:11},
                {id:84},
            ]
        },
        },   
        {
        name: "BACANAS FC",
        image: img,
        qualification: 17,
        votes: 5,
        available:true,
        user: {
            connect:{
                id:84
            }
        },
        player:{
            connect:[
                {id:86},
                {id:62},
                {id:70},
            ]
        },
        },
        {
            name: "TIRAME UN CENTRO",
            image: img,
            qualification: 17,
            votes: 5,
            available:false,
            user: {
                connect:{
                    id:16
                }
            },
            player:{
                connect:[
                    {id:51},
                    {id:18},
                    {id:58},
                    {id:63},
                ]
            },
        },
        {
            name: "MELLAMANS",
            image: img,
            qualification: 17,
            votes: 5,
            available:false,
            user: {
                connect:{
                    id:81
                }
            },
            player:{
                connect:[
                    {id:22},
                    {id:1},
                    {id:80},
                    {id:25},
                ]
            },
        },
        {
            name: "HEINZE FC",
            image: img,
            qualification: 100,
            votes: 20,
            available:true,
            user: {
                connect:{
                    id:81
                }
            },
            player:{
                connect:[
                    {id:92},
                    {id:27},
    
                ]
            },
        },
        {
            name: "HAY TABLA",
            image: img,
            qualification: 25 ,
            votes: 5,
            available:true,
            user: {
                connect:{
                    id:81
                }
            },
            player:{
                connect:[
                    {id:28},
                    {id:31},
                    {id:37},
    
                ]
            },
        },
        {
            name: "CUMBIA NENA",
            image: img,
            qualification: 21,
            votes: 8,
            available:false,
            user: {
                connect:{
                    id:47
                }
            },
            player:{
                connect:[
                    {id:40},
                    {id:75},
                    {id:76},
                    {id:82},
                ]
            },
        },
        {
            name: "TEMPORADA ALTA",
            image: img,
            qualification: 21,
            votes: 8,
            available:true,
            user: {
                connect:{
                    id:76
                }
            },
            player:{
                connect:[
                    {id:89},
                    {id:29},
    
                ]
            },
        },
        {
            name: "JUST LUD IR",
            image: img,
            qualification: 30,
            votes: 9,
            available:true,
            user: {
                connect:{
                    id:85
                }
            },
            player:{
                connect:[
                    {id:61},
                    {id:74},
    
                ]
            },
        },
        {
            name: "PARRILLERAS",
            image: img,
            qualification: 8,
            votes: 3,
            available:true,
            user: {
                connect:{
                    id:74
                }
            },
            player:{
                connect:[
                    {id:79},
                    {id:78},
    
                ]
            },
        },
        {
            name: "MAMBO",
            image: img,
            qualification: 50,
            votes: 25,
            available:true,
            user: {
                connect:{
                    id:88
                }
            },
            player:{
                connect:[
                    {id:83},
                    {id:81},
    
                ]
            },
        },
        {
            name: "S.D.T.",
            image: img,
            qualification: 7,
            votes: 5,
            available:true,
            user: {
                connect:{
                    id:40
                }
            },
            player:{
                connect:[
                    {id:80},
                    {id:28},
    
                ]
            },
        },
        {
            name: "ALOHA",
            image: img,
            qualification: 3,
            votes: 1,
            available:true,
            user: {
                connect:{
                    id:28
                }
            },
            player:{
                connect:[
                    {id:80},
                    {id:60},
    
                ]
            },
        },
]

export default team

