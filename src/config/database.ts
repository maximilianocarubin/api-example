import mongoose from "mongoose";
import logger from "../utils/logger";

export const configure = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:root@cluster0.zy2gvyu.mongodb.net/?retryWrites=true&w=majority");
    logger.info("🟢 Connected to the database");
  } catch (error) {
    logger.error("🔴 Error connecting to the database:", error);
  }
};
