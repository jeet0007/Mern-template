const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/CloudCafe", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 1000
        })
        console.log("Database Connection Successfull 👍");
    } catch (err) {
        console.log("Database Connection Failed 🎇");
        console.error(err)
        process.exit(1);
    }
};

module.exports = connectDB;