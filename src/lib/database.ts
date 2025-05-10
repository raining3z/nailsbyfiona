import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in .env.local'
  );
}

// Extend the Node.js global type
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

// Initialize once
if (!global._mongooseCache) {
  global._mongooseCache = {
    conn: null,
    promise: null,
  };
}

// Create a local reference to avoid TypeScript "possibly undefined" error
const cached = global._mongooseCache;

export const connectMongo = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// Optional: raw MongoClient support
let cachedClient: MongoClient | null = null;

export const clientPromise = async () => {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(MONGODB_URI);
  cachedClient = await client.connect();
  return client;
};
