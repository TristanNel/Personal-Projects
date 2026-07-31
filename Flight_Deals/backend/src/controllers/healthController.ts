import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getHealth = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Test database connection
        await prisma.$queryRaw`SELECT 1`;

        res.status(200).json({
            status: "OK",
            database: "Connected",
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: "ERROR",
            database: "Disconnected"
        });
    }
};