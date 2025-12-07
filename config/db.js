import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`The Mongo DB Connection is valid ${connect.connection.host}`);

    } catch (error) {
        console.log(`Something went wrong ${error.message}`);
        process.exit(1);

    }

}

export default connectDB;