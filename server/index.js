require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");

const connectDb = require("./connection");
connectDb("mongodb://127.0.0.1:27017/camperconnect");

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200,
};

const campgroundRoutes = require("./routes/campground");

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/campgrounds", campgroundRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
