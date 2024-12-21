const express = require('express')
const Nurse = require('../models/nurseModel');
const { createNurse, getNurseById } = require('../controllers/nurseController');
const router = express.Router();

router.route("/create").post(createNurse);
router.route("/:id").get(getNurseById);

module.exports = router;