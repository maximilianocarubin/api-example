import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const router = Router();

// OBTENER TODOS
router.get("/", authMiddleware, adminMiddleware, userController.index);
// CREAR
router.post("/",userController.create);
// OBTENER UNO
router.get("/:id", userController.show);
// BORRAR
router.delete("/:id", userController.destroy);

export default router;
