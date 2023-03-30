import React from 'react'
import logo from './logo.png';
import styles from './sign-up-page.module.css';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const SignUpPage = (props) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(userRef.current){
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])


  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

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
        <div className={styles['frame8']}>
          <span className={styles['text08']}>
            <label htmlFor="username">Full name</label>
            <input value={username} name="username" id="username" placeholder="ful name" />
            <input type="text" placeholder="Email Address" className={styles["textbar"]} />
          </span>
        </div>
        <div className={styles['frame22']}>
          <span className={styles['text10']}>
          <input type="text" placeholder="Full Name" className={styles["textbar"]} />
          </span>
        </div>
        <div className={styles['frame17']}>
          <span className={styles['text12']}>
            <input type="text" placeholder="Create Password (must contain at least 5 characters)" className={styles["textbar"]} />
          </span>
        </div>
        <div className={styles['frame23']}>
          <span className={styles['text14']}>
          <input type="text" placeholder="Phone Number" className={styles["textbar"]} />

          </span>
        </div>
        <div className={styles['frame18']}>
          <span className={styles['text16']}>
          <input type="text" placeholder="Location" className={styles["textbar"]} />

          </span>
        </div>
        <div className={styles['frame21']}>
        <button type="button" className={styles["button-1"]} onclick={console.log("ar")}>Register</button> 

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
