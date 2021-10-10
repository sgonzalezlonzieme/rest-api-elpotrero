-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "collection_id" TEXT NOT NULL,
    "collection_status" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "external_reference" TEXT,
    "payment_type" TEXT NOT NULL,
    "merchant_order_id" TEXT NOT NULL,
    "preference_id" TEXT NOT NULL,
    "site_id" TEXT NOT NULL,
    "processing_mode" TEXT NOT NULL,
    "merchant_account_id" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "FieldCharacters_fieldId_unique" RENAME TO "FieldCharacters_fieldId_key";

-- RenameIndex
ALTER INDEX "TimeTable_gameId_unique" RENAME TO "TimeTable_gameId_key";
