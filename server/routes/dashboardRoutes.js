import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { getDashborad } from "../controller/dashboardController.js";

const dashboardRouter = Router();

dashboardRouter.get('/', protect, getDashborad)

export default dashboardRouter;