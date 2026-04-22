import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as adminController from "../controllers/adminController.js";

const router = Router();

router.get("/users", authMiddleware, adminController.getUser);

router.delete("/users/:id", authMiddleware, adminController.deleteUser);
router.put("/users/:id", authMiddleware, adminController.updateUser);

export default router;