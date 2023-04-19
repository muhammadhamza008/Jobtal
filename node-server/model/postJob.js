const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  cnic: String,
  regNumber: String,
  industry: String,
  location: String,
  jobLevel: String,
  salary: String
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;