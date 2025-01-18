"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardControler_1 = require("../controllers/dashboardControler");
const router = (0, express_1.Router)();
router.get("/", dashboardControler_1.getDashboardMetrics);
exports.default = router;
