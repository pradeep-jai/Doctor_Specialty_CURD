const mongoose = require('mongoose');
const specialty = mongoose.model('specialty');



module.exports.createSpecialty = async(req, res) => {
    if (!req.body.splName) {
        res.status(500).json({
            "data ": null,
            "msg ": "Specialty Name is mandatory!"
        }); 
        return;
    };

    try {
        let splRecords = await specialty.find({splName : req.body.splName});

        if (splRecords && splRecords.length === 0) {
            var ins_specialty = new specialty();
            ins_specialty.splName = req.body.splName;
            ins_specialty.crAt = new Date();
            ins_specialty.save((err, docs) => {
                if (!err)
                    res.status(200).json(docs)
                else 
                    res.status(500).json(err);
            })
        } else {
            res.json({
                "msg ": "This Specialty has already been saved..!"
            }); 
            return;
        }
    } catch (error) {
        res.send(error);
    }
};

module.exports.readSpecialtyByName = async (req, res) => {
    console.log("1111111111111111111111")
    console.log(req.body)
    var splData = null;
    if (req.body.splName) {
        splData = await specialty.find({splName : req.body.splName});
    } else {
        splData = await specialty.find({});
    };

    if (splData && splData.length === 0) {

    } else {
        
    }

    res.send(splData)
}


