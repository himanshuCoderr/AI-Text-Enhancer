import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGO DB CONNECTED", connectInstance.connection.host);
    } catch (error) {
        console.log("CATCHED AN INTERNAL ERROR", error);
        process.exit(1);
    }
}

export default connectDB;
