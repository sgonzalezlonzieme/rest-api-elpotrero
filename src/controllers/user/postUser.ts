import Express from "express";
import User from "./type";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function postUser(req: Express.Request, res: Express.Response) {
  try {
    const user: User = req.body;

    const userMail = await prisma.user.findFirst({
      where: {
        mail: user.mail,
      },
    });

    if (userMail) {
      return res.send("El email ya existe");
    }

    const userDni = await prisma.user.findFirst({
      where: {
        dni: user.dni,
      },
    });

    if (userDni) {
      return res.send("El dni ya existe");
    }

    const userName = await prisma.user.findFirst({
      where: {
        userName: user.userName,
      },
    });

    if (userName) {
      return res.send("El nombre de usuario ya existe");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    await prisma.user.create({
      data: {
        name: user.name,
        userName: user.userName,
        gender: user.gender,
        dni: user.dni,
        birthday: user.birthday,
        cellphone: user.cellphone,
        mail: user.mail,
        image: user.image,
        password: user.password,
        player: {
          create: {
            position: user.player.position,
            qualification: user.player.qualification,
          },
        },
      },
    });

    return res.json("Se registro exitosamente");
  } catch (error) {
    res.status(404).send({ mensaje: "Error en el post de user", error: error });
  }
}

export default postUser;
