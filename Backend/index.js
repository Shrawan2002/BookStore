import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/bookRouter.js";
import cors from "cors";

const app  = express();
dotenv.config();
app.use(cors());

// connect to mongoDb

// main()
// .then(()=>{
//     console.log("connection successfull");
// }).catch((err)=>{
//     console.log(err);
// })

// async function main() {
//     mongoose.connect(process.env.MongoDBURL);
// }

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

connectDB();

//defining routes
app.use("/book", bookRouter)

app.use("/", (req,res)=>{
    res.send("req is received he..")
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})