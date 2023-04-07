import React from 'react'
import logo from './logo.png';
import styles from './sign-up-page.module.css';
import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const SignUpPage = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the email change
  const handleEmail = (e) => {
  setEmail(e.target.value);
  setSubmitted(false);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
  };

  const handleUserType = (e) => {
    setUserType(e.target.value);
    setSubmitted(false);
    };
  
  // Handling the form submission
  const handleSubmit = (e) => {
  e.preventDefault();
  if (name === '' || email === '' || userType === ''|| password === '') {
  setError(true);
  } else {
  setSubmitted(true);
  setError(false);
  }
  };
  
  // Showing success message
  const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h1>User {name} successfully registered!!</h1>
  </div>
  );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
  return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Please enter all the fields</h1>
  </div>
  );
  };
  


  return (
    <section>

      <div className={styles['sign-up-page']}>
        <div className={styles['menu']}>
          <span className={styles['text']}>
            <span>For job seekers</span>
          </span>
          <span className={styles['text02']}>
            <span>For employers</span>
          </span>
          <div className={styles['new-york']}>
            <span className={styles['text04']}>
              <span>Lahore</span>
            </span>
            <img
              src="/playground_assets/line11081-zb5.svg"
              alt="Line11081"
              className={styles['line1']}
            />
          </div>
        </div>
        <img
          src="/playground_assets/logo11081-ieco-200h.png"
          alt="logo11081"
          className={styles['logo1']}
        />
        <img
          src="/playground_assets/rectangle1081-wsl-800w.png"
          alt="Rectangle1081"
          className={styles['rectangle']}
        />
        <img
          src="/playground_assets/rectangle1081-la7j-700h.png"
          alt="Rectangle1081"
          className={styles['rectangle1']}
        />
        <span className={styles['text06']}>
          <span>Register</span>
        </span>

        <form>

        <div className={styles['frame8']}>
          <span className={styles['text08']}>
            <label>Email</label>
            <input type="text" placeholder="Email Address" className={styles["textbar"]} onChange={handleEmail}/>
          </span>
        </div>
        <div className={styles['frame22']}>
          <span className={styles['text10']}>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" className={styles["textbar"]} onChange={handleName}/>
          </span>
        </div>
        <div className={styles['frame17']}>
          <span className={styles['text12']}>
          <label>Password</label>
            <input type="text" placeholder="Create Password (must contain at least 5 characters)" className={styles["textbar"]} onChange={handlePassword}/>
          </span>
        </div>
        <div className={styles['frame23']}>
          <span className={styles['text14']}>
          <input type="text" placeholder="User Type" className={styles["textbar"]} onChange={handleUserType}/>

          </span>
        </div>
        {/* <div className={styles['frame18']}>
          <span className={styles['text16']}>
          <input type="text" placeholder="Location" className={styles["textbar"]} />

          </span>
        </div> */}
        </form>
        <div className={styles['frame21']}>
        <button type="submit" className={styles["button-1"]} onClick={handleSubmit}>Register</button> 

        </div>
      </div>
      <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
        />
    </section>
  )
}

export default SignUpPage
