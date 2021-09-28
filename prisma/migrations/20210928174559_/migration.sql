/*
  Warnings:

  - You are about to drop the `TeamPlayers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamPlayers" DROP CONSTRAINT "TeamPlayers_playerId_fkey";

-- DropForeignKey
ALTER TABLE "TeamPlayers" DROP CONSTRAINT "TeamPlayers_teamId_fkey";

-- DropTable
DROP TABLE "TeamPlayers";

-- CreateTable
CREATE TABLE "Team_Player" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "teamId1" INTEGER NOT NULL,
    "field_timetableId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field_Timetable" (
    "id" SERIAL NOT NULL,
    "available" BOOLEAN NOT NULL,
    "fieldId" INTEGER NOT NULL,
    "timetableId" INTEGER NOT NULL,

    CONSTRAINT "Field_Timetable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Team_Player" ADD CONSTRAINT "Team_Player_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team_Player" ADD CONSTRAINT "Team_Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_teamId1_fkey" FOREIGN KEY ("teamId1") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_field_timetableId_fkey" FOREIGN KEY ("field_timetableId") REFERENCES "Field_Timetable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field_Timetable" ADD CONSTRAINT "Field_Timetable_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field_Timetable" ADD CONSTRAINT "Field_Timetable_timetableId_fkey" FOREIGN KEY ("timetableId") REFERENCES "TimeTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
