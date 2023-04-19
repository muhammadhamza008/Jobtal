const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./db/connection');
const User = require('./model/userSchema');
const jobApplicationsRouter = require('./router/jobApplication');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use(require('./router/auth'));

app.use(require('./router/jobApplication', jobApplicationsRouter));
// const employeeSchema = new mongoose.Schema({
//     name: String
//     });
// const Employee = mongoose.model('Employee', employeeSchema);

// server.post('/demo',async (req,res)=>{
//     let employee = new Employee
//     employee.name = req.body.name
//     const doc = await employee.save()
//     console.log(req.body)

//     console.log(doc)
//     res.json(req.body)
// })

// server.get('/demo',async (req,res)=>{
//     const docs = await Employee.find({});
//     res.json(docs)
// })

// server.listen(8080,() => {
//     console.log('server started')
// })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));