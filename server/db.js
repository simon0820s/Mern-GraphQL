import mongoose from "mongoose";

export const connectDb = async () => {
  try {

  const conn = await mongoose.connect("mongodb://localhost/merndb");
  console.log(`Mongodb connected: ${conn.connection.name}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
};
