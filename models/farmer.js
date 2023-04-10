const mongoose = require("mongoose");

const farmerBank = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Enter username"],
      unique: true,
    },
    phoneno: {
      type: Number,
      required: [true, "Enter phone number"],
      unique: true,
    },
    income: {
      type: Number,
      required: [true, "Enter income"],
      unique: false,
    },
    expenses: {
      type: Number,
      required: [true, "Enter name"],
      unique: true,
    },
    balance: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Details = mongoose.model("Details", farmerBank);

module.exports = Details;
