import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  dotenv.config();
  console.log("Starting up...");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  if (!process.env.USER_EMAIL) {
    throw new Error("USER_EMAIL must be defined");
  }
  if (!process.env.USER_PASSWORD) {
    throw new Error("USER_PASSWORD must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
  app.listen(8080, () => {
    console.log("Listening on port 8080!");
  });
};

start();
