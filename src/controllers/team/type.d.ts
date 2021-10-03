import { Stars } from ".prisma/client";
import { Team_Player } from ".prisma/client";
import { Game } from ".prisma/client";

  export default interface Team {
       id?: number,
       name: string,
       image: string | undefined,
       qualification: Stars,
  }

  export default interface TeamId {
       id: number,
  }//Comentario de prubea para el git.
   
