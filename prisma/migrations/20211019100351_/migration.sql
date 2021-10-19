-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DEFAULT E'Por default',
ALTER COLUMN "cellphone" SET DEFAULT 1234,
ALTER COLUMN "image" SET DEFAULT E'Por default',
ALTER COLUMN "mail" SET DEFAULT E'Por default',
ALTER COLUMN "password" SET DEFAULT E'Por default',
ALTER COLUMN "userName" SET DEFAULT E'Por default';
