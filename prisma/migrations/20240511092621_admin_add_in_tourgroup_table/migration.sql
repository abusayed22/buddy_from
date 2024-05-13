/*
  Warnings:

  - Added the required column `admin` to the `tourGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tourgroup` ADD COLUMN `admin` VARCHAR(100) NOT NULL;
