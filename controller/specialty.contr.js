const mongoose = require('mongoose');
const specialty = mongoose.model('specialty');

/* 
    Purpose : To create specialty docs
    Input : specialty name and status
*/
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

/* 
    Purpose : Get the specialty details based on specialty name,
    Input : specialty name
 */
module.exports.readSpecialtyByName = async (req, res) => {
    try {
        var splData = null;
        if (req.body.splName) {
            splData = await specialty.find({splName : req.body.splName});
        } else {
            splData = await specialty.find({});
        };

        if (splData && splData.length === 0) {
            return new Error("Please check & give the correct specialty name, There is no data in specialty collection..")
        } else {
            res.status(200).json(splData)
        };
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 
    Purpose : Update specialty docs
    Input : specialty update name
*/
module.exports.updateSpecialty = async (req,res) => {
    if (!req.body.splName) {
        res.status(500).json({
            "data ": null,
            "msg ": "splName is mandatory for update purpose!"
        }); 
        return;
    };

    try {
        var updateSplDocs = await specialty.updateOne({splName : req.body.splName},{"$set" : {splName : req.body.updateSplName}});
        res.status(200).json(updateSplDocs)
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 
    Purpose : Delete the specialty docs based on specialty name
    Input : specialty name

     Note     : If we want to delete any records, we shouldn't delete that record, we have to set a "Status"
               # isActive = A(Active)  
               # isActive = D(DeActive)
*/
module.exports.deleteSpecialty = async (req, res) => {
    if (!req.body.splName) {
        res.status(500).json({
            "data ": null,
            "msg ": "splName is mandatory for delete purpose!"
        }); 
        return;
    };
    try {
        var deleteSplDocs = await specialty.updateOne({splName : req.body.splName},{"$set" : {splStatus : "DA"}});
        res.status(200).json(deleteSplDocs)
    } catch (error) {
        res.status(500).json(error);
    }
};


