import express from "express";
import cors from "cors";
import routeRoutes from "./routes/routeRoutes.js";

console.log("Loading app.ts");

import healthRoutes from "./routes/healthRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

console.log("Registering route routes...");

app.use("/api/routes", routeRoutes);
app.use("/api/health", healthRoutes);

export default app;