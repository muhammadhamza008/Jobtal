const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


// const dbURL = "mongodb+srv://user:wiQd44tSAZg9O24Q@cluster0.eknly6e.mongodb.net/JobPortal?retryWrites=true&w=majority"

const dbURL = "mongodb+srv://umer:jMqgRbUVnoM9uAwh@cluster0.ejy7buo.mongodb.net/jobtal?retryWrites=true&w=majority"

//connecting DB------------------------------------------------------------------------
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


const app = express();

app.use(cors())
app.use(bodyParser.json());

//Employee Signup------------------------------------------------------------------------

const Employee = mongoose.model('Employee', {
    email: String,
    name: String,
    password: String
});

app.post('/signup', async (req,res)=>{
    const {email,name, password} = req.body;

    const employee = new Employee({email,name, password});
    try{
        await employee.save();
        res.status(201).send({message: "Employee created"});
    }catch(e){
        console.log(e);
        res.status(400).send({message: "Error creating employee"});
    }
    
});

//Employee Search------------------------------------------------------------------------

app.post('/api/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
    console.log(employees)
});

    
//Employee Profile------------------------------------------------------------------------


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

// Model
const User = mongoose.model('User',UserSchema);

//Routes

// post route
app.post('/employeeprofile', async (req,res) => {
    //getting data
    const {name, location, phoneNumber} = req.body;

    //creating new user
    const user = new User({
        name,
        location,
        phoneNumber
    });

    // deleting all previous rows that have the same 'name' element
    const deletedUser = await User.deleteMany({name: name});

    //saving in DB
    await user.save();

    res.status(201).send(user);
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});