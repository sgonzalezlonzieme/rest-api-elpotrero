import Express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import config from "../../config/config";
import User from "../user/type";

export default async function putLoginGoogle(
  req: Express.Request,
  res: Express.Response
) {
  //EN EL FRONT LA PRIMERA VEZ TODOS LOS DATOS SON OBLIGATORIOS
  //LUEGO YA TENDRÍA QUE HACER EL PUT DE CATU DENTRO DE LA PÁGINA
  //LA SEGUNDA VEZ SE USA LA RUTA POSTLOGINGOOGLE
  const user: any = req.body; //TYPE USER

  //DEVOLVER MENSAJE SI YA EXISTE EL UNIQUE
  const dni = parseInt(user.dni);
  const cellphone = parseInt(user.cellphone);

  const userDni = await prisma.user.findFirst({
    where: { dni: dni },
  });

  if (userDni) {
    return res.send("El dni ya existe en la base de datos");
  }

  const googleUser: any = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      dni: dni,
      userName: user.userName,
      gender: user.gender,
      birthday: user.birthday,
      cellphone: cellphone,
      player: {
        update: {
          position: user.player,
        },
      },
    },
  });

  const token = jwt.sign({ id: user.id }, config.jwtSecret, {
    expiresIn: "60m",
  });

  return res.send({ ...googleUser, token: token });
}
