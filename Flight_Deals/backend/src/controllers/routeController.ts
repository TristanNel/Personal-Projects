import { Request, Response } from "express";
import { routeService } from "../services/routeServices.js";

export const routeController = {

    async getRoutes(req: Request, res: Response) {

        const routes = await routeService.getAllRoutes();

        res.json(routes);

    },

    async getRoute(req: Request, res: Response) {

        const id = Number(req.params.id);

        const route = await routeService.getRoute(id);

        if (!route) {

            return res.status(404).json({

                message: "Route not found"

            });

        }

        res.json(route);

    },

    async createRoute(req: Request, res: Response) {

        const { origin, destination } = req.body;

        const route = await routeService.createRoute(origin, destination);

        res.status(201).json(route);

    },

    async deleteRoute(req: Request, res: Response) {

        const id = Number(req.params.id);

        await routeService.deleteRoute(id);

        res.status(204).send();

    }

};