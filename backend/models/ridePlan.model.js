const mongoose = require("mongoose");

const ridePlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    dropLocation: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      enum: ["weekly", "monthly"],
      default: "monthly",
    },
  },
  {
    timestamps: true,
  }
);

const RidePlan = mongoose.model("RidePlan", ridePlanSchema);

module.exports = RidePlan;
