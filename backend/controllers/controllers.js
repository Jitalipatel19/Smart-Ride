const RidePlan = require("../models/ridePlan.model");

// CREATE Ride Plan
exports.createRidePlan = async (req, res) => {
  try {
    const ride = await RidePlan.create(req.body);
    res.status(201).json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET All Ride Plans
exports.getRidePlans = async (req, res) => {
  try {
    const rides = await RidePlan.find();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Ride Plan
exports.deleteRidePlan = async (req, res) => {
  try {
    await RidePlan.findByIdAndDelete(req.params.id);
    res.json({ message: "Ride deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
