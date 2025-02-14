import mongoose from "mongoose";

const connectDB = async() =>{

    mongoose.connection.on('connected', ()=> console.log("DATABASE CONNECTED."))

    await mongoose.connect(`${process.env.MONGODB_URI}/swarnamhealthcare`)
}

export default connectDB;

// Do not use '@' symbol in your database user's password else it will show an error.