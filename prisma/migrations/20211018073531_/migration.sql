-- CreateEnum
CREATE TYPE "Attending" AS ENUM ('YES', 'NO', 'PENDING');

-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DEFAULT E'Por default',
ALTER COLUMN "cellphone" SET DEFAULT 1234,
ALTER COLUMN "image" SET DEFAULT E'Por default',
ALTER COLUMN "mail" SET DEFAULT E'Por default',
ALTER COLUMN "password" SET DEFAULT E'Por default',
ALTER COLUMN "userName" SET DEFAULT E'Por default';

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "guest" INTEGER NOT NULL,
    "Attending" "Attending" NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
