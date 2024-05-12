const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
//initializing express app
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on Port: ${process.env.PORT}-DB Connected`);
  });
});
