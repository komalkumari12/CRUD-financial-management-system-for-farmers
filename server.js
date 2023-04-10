const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
require("./database/connection");
const userRouter = require("./routers/user");

app.use(express.json());

const port = process.env.PORT;

app.use('/api',userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
