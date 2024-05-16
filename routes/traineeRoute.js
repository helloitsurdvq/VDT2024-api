const express = require('express');
const courseController = require("../controllers/traineeController")
const router = express.Router();

router.get("/", courseController.getAllTrainees);
router.post("/", courseController.saveTrainee);
router.put("/:id", courseController.updateTrainee);
router.delete("/:id", courseController.deleteTrainee);

module.exports = router;