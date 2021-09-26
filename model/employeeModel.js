const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/testDb', {useNewUrlParser: true});

//Define Schema 
var schema = mongoose.Schema;
var empSchema = new schema({
    employeeId: Number,
    employeeName: String,
    salary: String
}, {versionKey:false});

var empModel = mongoose.model('emps', empSchema);
module.exports = empModel;