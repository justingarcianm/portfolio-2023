/*
  Warnings:

  - You are about to alter the column `id` on the `Category` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `projectID` on the `Category` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `Skills` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `projectID` on the `Skills` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id` on the `Project` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Category" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" STRING NOT NULL,
    "projectID" INT4,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Category_projectID_key";
INSERT INTO "_prisma_new_Category" ("createdAt","id","projectID","title") SELECT "createdAt","id","projectID","title" FROM "Category";
DROP TABLE "Category" CASCADE;
ALTER TABLE "_prisma_new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_projectID_key" ON "Category"("projectID");
ALTER TABLE "Category" ADD CONSTRAINT "Category_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
CREATE TABLE "_prisma_new_Skills" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" STRING NOT NULL,
    "projectID" INT4,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Skills" ("createdAt","id","projectID","title") SELECT "createdAt","id","projectID","title" FROM "Skills";
DROP TABLE "Skills" CASCADE;
ALTER TABLE "_prisma_new_Skills" RENAME TO "Skills";
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
CREATE TABLE "_prisma_new_Project" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "imageURL" STRING NOT NULL,
    "repoLink" STRING NOT NULL,
    "demoLink" STRING NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Project" ("createdAt","demoLink","description","id","imageURL","repoLink","title") SELECT "createdAt","demoLink","description","id","imageURL","repoLink","title" FROM "Project";
DROP TABLE "Project" CASCADE;
ALTER TABLE "_prisma_new_Project" RENAME TO "Project";
