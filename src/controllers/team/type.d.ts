import { Stars } from ".prisma/client";
import { Team_Player } from ".prisma/client";
import { Game } from ".prisma/client";

  export default interface Team {
       id?: number,
       name: string,
       image: string | undefined,
       qualifaction: Stars,
  }