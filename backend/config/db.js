const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to Db");
  } catch (err) {
    console.log(`${err}`);
  }
};
module.exports = connectDB;
