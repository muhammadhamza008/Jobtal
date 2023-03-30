import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const handleSwitch = () =>{
        navigate("/signup")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={handleSwitch}>Don't have an account? Register here.</button>
        </>
    )
}