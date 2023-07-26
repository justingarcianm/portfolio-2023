-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_projectID_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_projectID_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "projectID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Skills" ALTER COLUMN "projectID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
