const mongoose = require("mongoose");
const dbconnection = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL, {})
      .then(() => {
        console.log("Database is connected");
      })
      .catch((err) => {
        console.log("database error", err.message);
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbconnection;