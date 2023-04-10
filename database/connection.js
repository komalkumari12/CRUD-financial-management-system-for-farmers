const mongoose = require("mongoose");
const URI = process.env.MONGO_DB;

mongoose
  .connect(URI)
  .then((res) => {
    console.log("DataBase connected to application");
  })
  .catch((error) => {
    console.log(error.message);
  });
