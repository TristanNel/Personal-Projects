import { Router } from "express";
import { routeController } from "../controllers/routeController";

const router = Router();

router.get("/", routeController.getRoutes);

router.get("/:id", routeController.getRoute);

router.post("/", routeController.createRoute);

router.delete("/:id", routeController.deleteRoute);

export default router;