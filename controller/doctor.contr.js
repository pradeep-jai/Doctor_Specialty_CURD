const mongoose = require('mongoose');
const doctor = mongoose.model('doctor');

/* 
    Purpose : To create doctor docs
    Input : Doctor name, age and specialty
*/
module.exports.createDoctor = async(req, res) => {
    if (!req.body.docName) {
        res.status(500).json({
            "data ": null,
            "msg ": "Doctor Name is mandatory!"
        }); 
        return;
    };

    try {
        let docRecords = await doctor.find({docName : req.body.docName});

        /* Checking for duplicate */
        if (docRecords && docRecords.length === 0) {
            var ins_doctor = new doctor();
            ins_doctor.docName = req.body.docName;
            ins_doctor.age = req.body.age;
            ins_doctor.specialty = req.body.specialty;
            ins_doctor.crAt = new Date();
            ins_doctor.save((err, docs) => {
                if (!err)
                    res.status(200).json(docs)
                else 
                    res.status(500).json(err);
            })
        } else {
            res.json({
                "msg ": "This Doctor has already been saved..!"
            }); 
            return;
        }
    } catch (error) {
        res.send(error);
    }
};

/* 
    Purpose : Get the doctor details based on doctor name,
    Input : Doctor name
 */
module.exports.readDcotortyByName = async (req, res) => {
    try {
        var docData = null;
        if (req.body.docName) {
            docData = await doctor.find({docName : req.body.docName});
        } else {
            docData = await doctor.find({});
        };

        if (docData && docData.length === 0) {
            return new Error("Please check & give the correct doctor name, There is no data in doctor collection..")
        } else {
            res.status(200).json(docData)
        };
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 
    Purpose : Update doctor docs
    Input : Doctor update name, update age, update specialty
*/
module.exports.updateDoctor = async (req,res) => {
    if (!req.body.docName) {
        res.status(500).json({
            "data ": null,
            "msg ": "Doctor Name is mandatory for update purpose!"
        }); 
        return;
    };

    try {
        var updateDocs = {
            "$set" : {
                docName : req.body.updateDocName,
                age : req.body.updateAge,
                specialty : req.body.updateSpecialty
            }
        }
        var updateDoctorDocs = await doctor.updateOne({docName : req.body.docName},updateDocs);
        res.status(200).json(updateDoctorDocs)
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 
    Purpose : Delete the doctor docs based on doctor name
    Input : Doctor name

     Note     : If we want to delete any records, we shouldn't delete that record, we have to set a "Status"
               # isActive = A(Active)  
               # isActive = D(DeActive)
*/
module.exports.deleteDoctor = async (req, res) => {
    if (!req.body.docName) {
        res.status(500).json({
            "data ": null,
            "msg ": "Doctor Name is mandatory for delete purpose!"
        }); 
        return;
    };
    try {
        var deleteDoctorDocs = await doctor.updateOne({docName : req.body.docName},{"$set" : {docStatus : "DA"}});
        res.status(200).json(deleteDoctorDocs)
    } catch (error) {
        res.status(500).json(error);
    }
};