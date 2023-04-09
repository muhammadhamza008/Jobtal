import React, { useState } from 'react';
import logo from './logo.png';
import homeimg1 from './homeimg1.jpg';
import Rectangle from './Rectangle.png'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = res.json();
    
    if(res.status === 400 || res.status === 422 || !data) {
      window.alert("Invalid Credentials");
    }
    else {
      window.alert("Login Successful");
      navigate('/');
    }

  }

  return (
    <div>
      <div className={styles['sign-up-page']}>
        <img
          src={Rectangle}
          alt="Rectangle"
          className={styles['rectangle']}
        />
        <span className={styles['text06']}>
          <span>Forgot your password?</span>
        </span>
        <span className={styles['donthaveaccount']}>
          <span>Don’t have an aacount?</span>
        </span>
        <span className={styles['login']}>
          <span>Login</span>
        </span>
        <span className={styles['register']}>
          <span>Register</span>
        </span>

        <form method='POST'>
          <div className={styles['frame8']}>
            <span className={styles['text08']}>
              <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={styles["textbar"]}/>
            </span>
          </div>
          <div className={styles['frame17']}>
            <span className={styles['text12']}>
              <input type="text" name="password" placeholder= "Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles["textbar"]}/>
            </span>
          </div>
        </form>
      
        <div className={styles['frame21']}>
          <button type="submit" className={styles["button-1"]} onClick={loginUser}>Login</button> 
        </div>
        <span className={styles['text18']}>
          <span>Login</span>
        </span>
        <span className={styles['text20']}>
          <span>Recruiter Login</span>
        </span>
      </div>
        <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>
    </div>

  )
}