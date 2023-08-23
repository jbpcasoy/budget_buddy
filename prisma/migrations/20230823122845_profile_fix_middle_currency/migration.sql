/*
  Warnings:

  - You are about to drop the column `Currency` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "Currency",
ADD COLUMN     "currency" "Currency" NOT NULL,
ALTER COLUMN "middleName" DROP NOT NULL;
