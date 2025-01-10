import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL; // MongoDB URL 

let catched = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (catched.conn) return catched.conn;

  if (!MONGODB_URL) throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );

    catched.promise = catched.promise || mongoose.connect(MONGODB_URL, {
      dbName: 'evently',
      bufferCommands: false,

    })

    catched.conn = await catched.promise;

    return catched.conn;
}