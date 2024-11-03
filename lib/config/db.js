import mongoose from "mongoose";

//connecting to our MongoDB database
export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://truongblake:DQnZaVNIdpqxmaZ5@cluster0.zh1um.mongodb.net/blog-app');
    console.log("DB Connected");
}