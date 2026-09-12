import { Router } from "express";
import { changePassword, login, session } from "../controller/authController";
import { protect } from "../middleware/auth";

const authRouter = Router();

employeeRouter.post("/login", login)
employeeRouter.get("/session", protect,  session)
employeeRouter.post("/change-password", protect, changePassword)

export default authRouter;