import mongoose from "mongoose";

export const configure = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/database-example");
    console.log("🟢 Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
