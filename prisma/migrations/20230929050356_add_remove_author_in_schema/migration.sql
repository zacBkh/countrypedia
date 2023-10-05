/*
  Warnings:

  - You are about to drop the column `authorId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `UserName` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_name` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_authorId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "authorId",
ADD COLUMN     "author_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserName";
