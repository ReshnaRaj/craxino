const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbconnection = require("./Connection/database");
const userRoute = require("./Router/UserRoute");
dbconnection();

app.use(
  cors({
    origin:"*",
    methods: ["GET", "POST"],
    credentials:true
  })
);
 

app.use(express.json());
app.use("/", userRoute);
app.listen(4000, () => {
  console.log("server is runnign on port 4000");
});
