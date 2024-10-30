/*
  Warnings:

  - You are about to drop the column `name` on the `Note` table. All the data in the column will be lost.
  - Added the required column `color` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occurrence` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "name",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "occurrence" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
