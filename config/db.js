const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected Successfully");
    } catch (error) {
        return error.message;
    }
};

module.exports = { connectDB };