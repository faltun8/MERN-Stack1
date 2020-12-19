// mongodb+srv://dbUser:<password>@cluster0.ppzsc.mongodb.net/test

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("db succesfully connected")
    } catch (error) {
        console.log("error connecting db")
    }
}

module.exports = connectDB;