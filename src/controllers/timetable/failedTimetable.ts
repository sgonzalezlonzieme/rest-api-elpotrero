import Express from "express";
import { PrismaClient } from "@prisma/client";
import deleteTime from "./functions/deleteTime";
const prisma = new PrismaClient();

async function failedTimetable(req: Express.Request, res: Express.Response) {
  let timetableId = parseInt(req.params.id);

  deleteTime(timetableId);

  return res.redirect(`https://elpotrero2021.herokuapp.com/failed`);
}

export default failedTimetable;
