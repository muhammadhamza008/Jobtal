import React from 'react'
import logo from './logo.png';
import styles from './sign-up-page.module.css';
import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const SignUpPage = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState ({
    name:"",
    email:"",
    password:"",
    userType:""
  })

  let name, value;
  
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ... user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, userType } = user;

    const res = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, password, userType
      })
    })

    const data = res.json();
    
    if(res.status === 422 || res.status === 400 || !data) {
      window.alert("Registration Failed");
    }
    else {
      window.alert("Registration Successful");
      navigate('/login');
    }
  }

// const SignUpPage = (props) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [userType, setUserType] = useState('');
//   const [password, setPassword] = useState('');
  
//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
  
//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };
  
//   // Handling the email change
//   const handleEmail = (e) => {
//   setEmail(e.target.value);
//   setSubmitted(false);
//   };
  
//   // Handling the password change
//   const handlePassword = (e) => {
//   setPassword(e.target.value);
//   setSubmitted(false);
//   };

//   const handleUserType = (e) => {
//     setUserType(e.target.value);
//     setSubmitted(false);
//     };
  
//   // Handling the form submission
//   const handleSubmit = (e) => {
//   e.preventDefault();
//   if (name === '' || email === '' || userType === ''|| password === '') {
//   setError(true);
//   } else {
//   setSubmitted(true);
//   setError(false);
//   }
//   };
  
//   // Showing success message
//   const successMessage = () => {
//   return (
//   <div
//   className="success"
//   style={{
//   display: submitted ? '' : 'none',
//   }}>
//   <h1>User {name} successfully registered!!</h1>
//   </div>
//   );
//   };
  
  // Showing error message if error is true
  // const errorMessage = () => {
  // return (
  // <div
  // className="error"
  // style={{
  // display: error ? '' : 'none',
  // }}>
  // <h1>Please enter all the fields</h1>
  // </div>
  // );
  // };
  


  return (
    <section>

      <div className={styles['sign-up-page']}>
        <span className={styles['text06']}>
          <span>Register</span>
        </span>

        <form method='POST'>
          <div className={styles['frame22']}>
            <span className={styles['text10']}>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Full Name" className={styles["textbar"]} value = {user.name} onChange={handleInputs}/>
            </span>
          </div>
          <div className={styles['frame8']}>
            <span className={styles['text08']}>
              <label>Email</label>
              <input type="email" name="email" placeholder="Email Address" className={styles["textbar"]} value = {user.email} onChange={handleInputs}/>
            </span>
          </div>
          <div className={styles['frame17']}>
            <span className={styles['text12']}>
            <label>Password</label>
              <input type="text" name="password" placeholder="Create Password" className={styles["textbar"]} value = {user.password} onChange={handleInputs}/>
            </span>
          </div>
          <div className={styles['frame23']}>
            <span className={styles['text14']}>
            <input type="text" name="userType" placeholder="Your Role" className={styles["textbar"]} value = {user.usertype} onChange={handleInputs}/>

            </span>
          </div>
        </form>
        <div className={styles['frame21']}>
          <button type="submit" className={styles["button-1"]} onClick={PostData}>Register</button> 

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
