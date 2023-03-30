import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const handleSwitch = () =>{
        navigate("/login")
    }

    return (
       <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="ful name" /> 
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={handleSwitch}>Already have an account? Login here.</button>
        </>
    )}
