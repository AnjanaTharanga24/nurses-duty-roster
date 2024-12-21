const express = require('express')
const Nurse = require('../models/nurseModel');
const { createNurse, getNurseById, getAllNurses } = require('../controllers/nurseController');
const router = express.Router();

router.route("/create").post(createNurse);
router.route("/").get(getAllNurses);
router.route("/:id").get(getNurseById);

module.exports = router;