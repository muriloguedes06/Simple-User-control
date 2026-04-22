import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as userController from "../controllers/userController.js";

const router = Router();

router.put("/users", authMiddleware, userController.editUser);
router.delete("/users", authMiddleware, userController.deleteUser);
router.get("/users", authMiddleware, userController.getUser);

export default router;