/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `allow_Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `allow_Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `allow_users` ADD COLUMN `name` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `allow_Users_name_key` ON `allow_Users`(`name`);
