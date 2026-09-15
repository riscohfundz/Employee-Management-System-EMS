import { Router } from "express";
import { protect, protectAdmin } from "../middleware/auth.js";
import { createPayslip, getPayslip, getPayslipById } from "../controller/payslipController.js";


const payslipRoutes = Router();

payslipRoutes.post('/', protect, protectAdmin, createPayslip)
payslipRoutes.get('/', protect, protectAdmin, getPayslip)
payslipRoutes.get('/:id', protect, protectAdmin, getPayslipById)


export default payslipRoutes;