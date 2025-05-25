/*
  Warnings:

  - You are about to drop the column `USUARIO` on the `USERS` table. All the data in the column will be lost.
  - Added the required column `LOGIN` to the `USERS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TASKS" ALTER COLUMN "DATAALT" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "USERS" DROP COLUMN "USUARIO",
ADD COLUMN     "LOGIN" TEXT NOT NULL,
ALTER COLUMN "CELULAR" DROP NOT NULL;
