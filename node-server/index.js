const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');





const dbURL = "mongodb+srv://user:wiQd44tSAZg9O24Q@cluster0.eknly6e.mongodb.net/JobPortal?retryWrites=true&w=majority"



const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(dbURL,connectionParams)
    .then(()=> {
        console.info("Connected to DB")
    })
    .catch((e)=>{
        console.log("Error",e)
    });

const employeeSchema = new mongoose.Schema({
    name: String
    });
const Employee = mongoose.model('Employee', employeeSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());


server.post('/demo',async (req,res)=>{
    let employee = new Employee
    employee.name = req.body.name
    const doc = await employee.save()
    console.log(req.body)

    console.log(doc)
    res.json(req.body)
})

server.get('/demo',async (req,res)=>{
    const docs = await Employee.find({});
    res.json(docs)
})

server.listen(8080,() => {
    console.log('server started')
})

