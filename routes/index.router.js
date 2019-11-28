/* Create a express router */
const express = require('express');
const router = express.Router();

/* To require controller files */
const specialtyController = require('../controller/specialty.contr');
const doctorController = require('../controller/doctor.contr');


/* create Specialty routes */
router.post('/createSpecialty', specialtyController.createSpecialty);

router.post('/readSpecialtyByName', specialtyController.readSpecialtyByName);

router.put('/updateSpecialty', specialtyController.updateSpecialty)

router.put('/deleteSpecialty', specialtyController.deleteSpecialty)

/* create Doctor routes */
router.post('/createDoctor', doctorController.createDoctor);

router.post('/readDcotortyByName',doctorController.readDcotortyByName)

router.put('/updateDoctor', doctorController.updateDoctor)

router.put('/deleteDoctor', doctorController.deleteDoctor)

/* To export router */ 
module.exports = router;
