import mongoose from "mongoose";

const connectDB = async()=>{
    try {
       await mongoose.connect("mongodb+srv://preamkumarmano:connectIn@cluster0.nnjtu.mongodb.net/connectin");
       console.log("DB Connected Successfully");
    } catch (error) {
        console.error("Error Connected DB",error.message);
    }
}

export {connectDB};