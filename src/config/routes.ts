import { Application } from "express";
import userRoutes from "../routes/user.routes";
import authRoutes from "../routes/auth.routes";

export const register = async (app: Application) => {
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);
  console.log("🟢 Routes registered");
};
