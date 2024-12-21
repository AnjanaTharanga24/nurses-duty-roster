const mongoose = require('mongoose');

const nurseSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add a task"]
        }
    }
)

const Nurse = mongoose.model("Nurse",nurseSchema)

module.exports = Nurse;