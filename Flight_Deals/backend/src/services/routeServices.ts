import prisma from "../config/prisma";

export const routeService = {

    async getAllRoutes() {
        return prisma.route.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    },

    async getRoute(id: number) {
        return prisma.route.findUnique({
            where: {
                id
            }
        });
    },

    async createRoute(origin: string, destination: string) {

        return prisma.route.create({

            data: {

                origin,

                destination

            }

        });

    },

    async deleteRoute(id: number) {

        return prisma.route.delete({

            where: {

                id

            }

        });

    }

};