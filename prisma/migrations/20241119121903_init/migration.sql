/*
  Warnings:

  - You are about to drop the column `lastUse` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `wasEdited` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `ExercisesConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoutineExercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Routines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoutineExercises" DROP CONSTRAINT "RoutineExercises_routineId_fkey";

-- DropForeignKey
ALTER TABLE "Routines" DROP CONSTRAINT "Routines_userId_fkey";

-- AlterTable
ALTER TABLE "Images" DROP COLUMN "lastUse";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "height",
DROP COLUMN "wasEdited",
DROP COLUMN "weight";

-- DropTable
DROP TABLE "ExercisesConfig";

-- DropTable
DROP TABLE "RoutineExercises";

-- DropTable
DROP TABLE "Routines";
