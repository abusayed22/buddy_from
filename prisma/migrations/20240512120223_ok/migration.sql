/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `allow_Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `allow_Users_email_key` ON `allow_Users`(`email`);
