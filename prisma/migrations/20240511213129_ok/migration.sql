/*
  Warnings:

  - You are about to drop the column `name` on the `allow_users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `allow_Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `allow_Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `allow_Users_name_key` ON `allow_users`;

-- AlterTable
ALTER TABLE `allow_users` DROP COLUMN `name`,
    ADD COLUMN `email` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `allow_Users_email_key` ON `allow_Users`(`email`);
