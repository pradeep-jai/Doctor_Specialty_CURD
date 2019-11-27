/* Create a express router */
const express = require('express');
const router = express.Router();

/* To require controller files */
const doctorController = require('../controller/doctor.contr');
const specialtyController = require('../controller/specialty.contr');

/* create products routes */
router.post('/createSpecialty', specialtyController.createSpecialty);

// router.get('/readSpecialty', specialtyController.readSpecialty);

router.post('/readSpecialtyByName', specialtyController.readSpecialtyByName);


/* To export router */ 
module.exports = router;
