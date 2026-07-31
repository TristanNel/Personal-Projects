/*
  Warnings:

  - You are about to drop the `FlightSearch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FlightSearch";

-- CreateTable
CREATE TABLE "Route" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);
