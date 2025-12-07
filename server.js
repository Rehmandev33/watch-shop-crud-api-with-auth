import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();


const app = express();




app.use(express.json());


const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Hey is this working");
    console.log("it works!");
})