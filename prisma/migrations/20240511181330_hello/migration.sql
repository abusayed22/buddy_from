/*
  Warnings:

  - You are about to drop the column `categories` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `expense_id` on the `expenses` table. All the data in the column will be lost.
  - Added the required column `category` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tour_id` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `expenses` DROP FOREIGN KEY `expenses_expense_id_fkey`;

-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `categories`,
    DROP COLUMN `expense_id`,
    ADD COLUMN `category` ENUM('travel', 'houesRent', 'carRent', 'planeRent') NOT NULL,
    ADD COLUMN `tour_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_tour_id_fkey` FOREIGN KEY (`tour_id`) REFERENCES `tourGroup`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
