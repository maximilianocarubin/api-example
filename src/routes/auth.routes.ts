import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

// REGISTRAR
router.post("/signup", authController.signup);
// INICIAR SESION
router.post("/login", authController.login);

export default router;
