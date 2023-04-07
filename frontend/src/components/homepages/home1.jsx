import React from 'react'
import logo from './logo.png';
import homeimg1 from './homeimg1.jpg';

import styles from './home1.module.css';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './loginbutton';
import LogoutButton from './logoutbutton';
import SignUpButton from './signupbutton';
import { Login } from '../../Login';
import SignUpPage from '../sign-up-page';




const Home = (props) => {


  const navigate = useNavigate();

  const handleSwitch_login = () =>{
    navigate("/login")
  }

  const handleSwitch_signup = () =>{
    navigate("/signup")
  } 

  return (
    <div>
      <div className={styles['border']}>
        <span className={styles['text']}>
          <span>Job for everyone</span>
        </span>
        <span className={styles['text02']}>
          <span>Create an account!</span>
        </span>
        <span className={styles['text04']}>
          <span>Job Portal</span>
        </span>

        <div className={styles['sign-in']}>
          
          <span className={styles['text12']}>
            <span>
              {/* <span>Sign Up</span> */}
              {/* <button>Sign Up</button>*/}
              {/* <button type="button" className={styles["button-1"]} onClick={LoginButton}>Sign Up</button> */}
              <SignUpButton/>
              {/* <button type="button" className={styles["button-1"]} onClick={handleSwitch_signup}>Sign Up</button>  */}
              <br></br>
              <span></span>
            </span>
          </span>
        </div>
        <span className={styles['text17']}>
          <span>Already have an account?</span>
        </span>
        <div className={styles['sign-in1']}>

          <div className={styles['rectangle5']}>
            {/* <button type="button" className={styles["button-1"]} onClick={handleSwitch_login}>Sign In</button> */}
            <LoginButton/>
            <p></p>
          </div>
        </div>

        <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>

      </div>
      
    </div>

  )
}

export default Home
