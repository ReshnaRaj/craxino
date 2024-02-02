const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbconnection = require("./Connection/database");
const userRoute = require("./Router/UserRoute");
dbconnection();

const corsOptions = {
  origin: process.env.BASE_URL,
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));

// Log the origin for debugging
console.log('CORS Origin:', corsOptions.origin);

app.use(express.json());
app.use("/", userRoute);
app.listen(4000, () => {
  console.log("server is runnign on port 4000");
});
