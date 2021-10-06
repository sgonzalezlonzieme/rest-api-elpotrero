/*
  Warnings:

  - The values [RUBBER] on the enum `FloorType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `description` on the `Field` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FloorType_new" AS ENUM ('SYNTHETIC', 'GRASS', 'CEMENT');
ALTER TABLE "FieldCharacteristics" ALTER COLUMN "floorType" TYPE "FloorType_new" USING ("floorType"::text::"FloorType_new");
ALTER TYPE "FloorType" RENAME TO "FloorType_old";
ALTER TYPE "FloorType_new" RENAME TO "FloorType";
DROP TYPE "FloorType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Field" DROP COLUMN "description";
