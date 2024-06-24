const express = require("express");
const app = express();
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const routes = require("./config/routes");
const cors = require("cors");

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
