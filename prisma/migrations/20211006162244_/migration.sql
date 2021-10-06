/*
  Warnings:

  - A unique constraint covering the columns `[fieldId]` on the table `FieldCharacteristics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FieldCharacteristics_fieldId_key" ON "FieldCharacteristics"("fieldId");
