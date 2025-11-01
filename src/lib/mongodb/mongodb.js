import { mongoose } from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;  

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not found from environment variables');
}



export const StartServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


// (async () => {
//   await StartServer();  
// })();