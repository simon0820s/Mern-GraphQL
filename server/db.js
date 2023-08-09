import mongoose from "mongoose";
import {MONGODB_URI} from './config.js'

export const connectDb = async () => {
  try {

  const conn = await mongoose.connect(MONGODB_URI);
  console.log(`Mongodb connected: ${conn.connection.name}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
};
