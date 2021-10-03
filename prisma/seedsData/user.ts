import { Prisma } from "@prisma/client";

const users: Prisma.UserCreateInput[] = [
    {
      name: "jaime",
      userName: "parzival2",
      dni: 1111,
      gender: "FEMALE",
      birthday: "dd",
      cellphone: 3127300123,
      mail: "jaime1@mail.com",
      image: "url",
      password: "123456",
      player: {
        create: {
          position: "ATTACKER",
          qualification: "FIVE",
        },
      },
    },
    {
      name: "jaime",
      userName: "parzival3",
      dni: 1112,
      birthday: "dd",
      cellphone: 3127300123,
      mail: "jaime2@mail.com",
      image: "url",
      password: "123456",
      gender: "FEMALE",
      player: {
        create: {
          position: "ATTACKER",
          qualification: "FIVE",
        },
      },
    },
    {
      name: "jaime",
      userName: "parzival4",
      dni: 1113,
      birthday: "dd",
      gender: "MALE",
      cellphone: 3127300123,
      mail: "jaime3@mail.com",
      image: "url",
      password: "123456",
      player: {
        create: {
          position: "ATTACKER",
          qualification: "FIVE",
        },
      },
    },
    {
      name: "jaime",
      userName: "parzival5",
      gender: "MALE",
      dni: 1114,
      birthday: "dd",
      cellphone: 3127300123,
      mail: "jaime4@mail.com",
      image: "url",
      password: "123456",
      player: {
        create: {
          position: "ATTACKER",
          qualification: "FIVE",
        },
      },
    },
    {
      name: "jaime",
      userName: "parzival6",
      dni: 1115,
      gender: "MALE",
      birthday: "dd",
      cellphone: 3127300123,
      mail: "jaime5@mail.com",
      image: "url",
      password: "123456",
      player: {
        create: {
          position: "ATTACKER",
          qualification: "FIVE",
        },
      },
    },
  ];

export default users