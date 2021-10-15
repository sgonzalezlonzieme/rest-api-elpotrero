
export default function captainInfo(team:any){
    let user = team.map((p:U) =>{
    return{
         id: p.user.id,
         image: p.user.image,
         name: p.user.name,
         userName: p.user.userName,
         gender: p.user.gender,
         birthday: p.user.birthday,
         position: p.user.player.position, 
         qualification: p.user.player.qualification/p.user.player.votes, 
         available: p.user.player.available, 
         mail: p.user.mail, 
    } 
 })
  return user
}

interface U{
    user: any
    player: any
}