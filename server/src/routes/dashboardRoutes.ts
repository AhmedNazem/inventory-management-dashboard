import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardControler";
const router = Router();

router.get("/", getDashboardMetrics);

export default router;
