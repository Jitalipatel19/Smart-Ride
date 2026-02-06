const express = require("express");
const router = express.Router();

const {
  createRidePlan,
  getRidePlans,
  deleteRidePlan,
} = require("../controllers/ridePlan.controller");

router.post("/", createRidePlan);
router.get("/", getRidePlans);
router.delete("/:id", deleteRidePlan);

module.exports = router;
