
export default function playerInfo(team:any){

    let player = team.map((t: { player: any[]; }) =>{
        return t.player.map((p:P) =>{
             return{
                 id: p.id,
                 image: p.user[0].image,
                 name: p.user[0].name,
                 userName: p.user[0].userName,
                 gender: p.user[0].gender,
                 birthday: p.user[0].birthday,
                 position: p.position,
                 qualification: p.qualification/p.votes,
                 available: p.available,
                 mail: p.user[0].mail,   
             }
         })
     }) 

    return player;
}

interface P{
    id: number,
    position: string,
    available: boolean,
    qualification: number,
    votes: number,
    user: any[]
    // image: string,
    // name: string,
    // userName: string,
    // gender: string,
    // birthday: string,
    // mail: string
}
