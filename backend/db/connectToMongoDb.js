import mongoose from 'mongoose';

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB");
    } catch(err){
        console.log("Error connecting to MongoDb", err.message);
    }
};

export default connectToMongoDb;