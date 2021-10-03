/*
  Warnings:

  - You are about to drop the column `available` on the `Field_Timetable` table. All the data in the column will be lost.
  - You are about to drop the column `qualifaction` on the `Team` table. All the data in the column will be lost.
  - Added the required column `qualification` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Field_Timetable" DROP COLUMN "available";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "qualifaction",
ADD COLUMN     "qualification" "Stars" NOT NULL;
