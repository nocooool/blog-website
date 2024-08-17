import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://nocool:Nakulshah%401611@cluster0.gf7bb.mongodb.net/blog-web')
    console.log('DB Connected');
}