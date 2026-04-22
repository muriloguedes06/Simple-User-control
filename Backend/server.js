import express from "express";
import cors from "cors";
import "dotenv/config";

import userRoutes from "./src/routes/userRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000);