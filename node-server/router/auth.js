const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connection');
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send("Hello World from the server!");
    console.log("Hello World from the server!");
})

router.post('/signup', async (req, res) => {

    const {name, email, password, userType} = req.body;

    // res.send(req.body);

    if(!name || !email || !password || !userType) {
        return res.status(422).json({ error:"Please fill all the fields" });
    }

    try {
        const userExist = await User.findOne({email:email})
    
        if(userExist)
            return res.status(422).json({ error: "Email Already Exists" });
        

        const user = new User(req.body);

        const userRegister = await user.save()

        if(userRegister)
            res.status(201).json({message: "User Registered Successfully"});
        else
            res.status(500).json({error: "User failed to registered"});

    } catch (err) {
        err => console.log(err)
    }    
})

router.post('/login', async (req, res) => {

    try {

        const {email, password} = req.body;

        // res.send(req.body);

        if(!email || !password) {
        return res.status(422).json({ error:"Please fill all the fields" });
    }
    
        const loginUser = await User.findOne({email:email})
    
        if(loginUser) {
            const isMatch = await bcrypt.compare(password, loginUser.password);
            if (!isMatch)
                return res.status(400).json({ error: "Invalid Credentials" });
            else
                return res.status(201).json({ message: "Logged In" });
        }

    } catch (err) {
        err => console.log(err)
    } 
})

module.exports = router;