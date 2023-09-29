/*
  Warnings:

  - You are about to drop the column `authorName` on the `Review` table. All the data in the column will be lost.
  - Added the required column `author_name` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "authorName",
ADD COLUMN     "author_name" TEXT NOT NULL;
