
// import { Fields } from ".prisma/client";

// const field_timetables: Field_Timetable[] = [
//     {
//     number: "ONE",
//     cost: 132142141223,
//     inicialTime:"10hs", 
//     endTime: "22hs",
//     image: "URL",
//     description: "La mejor", 
//     timeTables: {
//         create: [{
//             timeTable:{
//                 create:{
//                     connect:{
//                         id:1
//                     }
//                     // day:"04/10/2021",
//                     // hour:"10hs"
//                     // }
//                 }
//             }
//         }]
//         }  
//     },
//     // {
//     //     number: "TWO",
//     //     cost: 132142141223,
//     //     inicialTime:"10hs", 
//     //     endTime: "22hs",
//     //     image: "URL",
//     //     description: "La mejor", 
//     //     timeTables: {
//     //         create: [{
//     //             // timeTable:{
//     //             //     create:{
//     //                     day:"04/10/2021",
//     //                     hour:"10hs"
//     //                 //     }
//     //                 // }
//     //             }]
//     //         }  
//     // },
//     // {
//     //     number: "THREE",
//     //     cost: 132142141223,
//     //     inicialTime:"10hs", 
//     //     endTime: "22hs",
//     //     image: "URL",
//     //     description: "La mejor", 
//     //     timeTables: {
//     //         create: [{
//     //             // timeTable:{
//     //             //     create:{
//     //                     day:"04/10/2021",
//     //                     hour:"10hs"
//     //                 //     }
//     //                 // }
//     //             }]
//     //         }  
//     // },
//     // {
//     //     number: "THREE",
//     //     cost: 132142141223,
//     //     inicialTime:"10hs", 
//     //     endTime: "22hs",
//     //     image: "URL",
//     //     description: "La mejor", 
//     //     timeTables: {
//     //         create: [{
//     //             // timeTable:{
//     //             //     create:{
//     //                     day:"04/10/2021",
//     //                     hour:"20hs"
//     //                 //     }
//     //                 // }
//     //             }]
//     //         }  
//     // },
// ]

// interface Field_Timetable {
//     number: Fields,
//     inicialTime: string,
//     endTime: string,
//     cost: number,
//     image: string,
//     description: string, 
//     timeTables: {
//         create: [{
//             timeTable:{
//                 create:{
//                     connect:{
//                     id: number
//                     }
//                     // day:string,
//                     // hour:string,
//                 }
//             }
//         }]
//     }

// }

// export default field_timetables





















// const field_timetable: Field_Timetable=[
//     {
//         number: "ONE",
//         cost: 132142141223,
//         inicialTime:"10hs", 
//         endTime: "22hs",
//         image: "URL",
//         description: "La mejor",
//         timetable: {
//             create:{
//                     day:"04/10/2021",
//                     hour:"10hs",
//             }
//         }
//     },

// ]


// interface Field_Timetable{
//         number: string,
//         cost: number,
//         inicialTime:string, 
//         endTime: string,
//         image: string,
//         description: string,
//         timetable: {
//             create:{
//                     day:string,
//                     hour:string,
//             }
//         }

// }

// export default field_timetable