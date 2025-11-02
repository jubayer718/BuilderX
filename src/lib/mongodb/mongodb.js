import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
// console.log("MongoDB URI:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not found in environment variables");
}

// Global cache to prevent multiple connections during hot reloads
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const StartServer = async () => {
  if (cached.conn) {
    // If already connected, return that connection
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongooseInstance) => {
      console.log("✅ MongoDB connected");
      return mongooseInstance;
    }).catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
