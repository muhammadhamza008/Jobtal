const express = require('express');
const router = express.Router();
const Data = require('./model');

router.post('/submit', (req, res) => {
  const newData = new Data({
    cnic: req.body.textValue,
    regNumber: req.body.textValue1,
    industry: req.body.dropdownValue1,
    location: req.body.dropdownValue2,
    jobLevel: req.body.dropdownValue3,
    salary: req.body.dropdownValue4
  });
  
  newData.save().then(() => {
    res.status(200).send('Data saved successfully');
  }).catch((err) => {
    res.status(400).send('Data save error:', err);
  });
});

module.exports = router;