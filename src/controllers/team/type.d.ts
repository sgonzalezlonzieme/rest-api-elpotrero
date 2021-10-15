import { Player, Stars } from ".prisma/client";
import { Team_Player } from ".prisma/client";
import { Game } from ".prisma/client";

  export default interface Team {
       id?: number,
       name: string,
       image: string | undefined,
       qualification: number,
       votes: number,
       user: User,
       player: Player
  }

  export default interface TeamId {
       id: number,
  }//Comentario de prubea para el git.
   
//   interface P{
//      id: number,
//      position: string,
//      available: boolean,
//      qualification: number,
//      votes: number,
//      user: any[]
//      // image: string,
//      // name: string,
//      // userName: string,
//      // gender: string,
//      // birthday: string,
//      // mail: string
//  }