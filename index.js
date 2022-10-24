const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

const toursRoute = require("./routes/v1/tours.routes");

app.use(cors());
dotenv.config();
app.use(express.json());

// Database Connect
require("./config/dbConnect");

// Routes
app.use("/api/v1", toursRoute);

// Helath Check
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Tour Mangement listening on port ${port}`);
});
