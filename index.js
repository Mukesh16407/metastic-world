const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/dbConfig");
require("dotenv").config();

const userRoute = require("./routes/userRoutes");
const distributeRoutes = require("./routes/distributeRoutes");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api", userRoute);
app.use("/api", distributeRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
