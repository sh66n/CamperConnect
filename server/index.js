require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");

const connectDb = require("./connection");
connectDb(process.env.MONGODB_CONNECTION_URL);

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200,
};

const campgroundRoutes = require("./routes/campground");
const authRoutes = require("./routes/auth");
const wishlistRoutes = require("./routes/wishlist");

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/campgrounds", campgroundRoutes);
app.use("/api/users/:id/wishlist", wishlistRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
