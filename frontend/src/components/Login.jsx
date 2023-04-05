import React, { useState } from 'react';
import logo from './components/logo.png';
import homeimg1 from './components/homeimg1.jpg';
import Rectangle from './Rectangle.png'
import styles from './login.module.css'

export const Login = (props) => {
  return (
    <div>
      <div className={styles['sign-up-page']}>
        <div className={styles['geometric']}>
          <div className={styles['womancurcle']}>
          </div>
          <div className={styles['mancurcle']}>
          </div>
        </div>
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
              src="/playground_assets/line11081-r8k8.svg"
              alt="Line11081"
              className={styles['line1']}
            />
          </div>
        </div>
        <img
          src="/playground_assets/logo11081-t7o-200h.png"
          alt="logo11081"
          className={styles['logo1']}
        />
        <img
          src={Rectangle}
          alt="Rectangle1081"
          className={styles['rectangle']}
        />
        <span className={styles['text06']}>
          <span>Forgot your password?</span>
        </span>
        <span className={styles['text08']}>
          <span>Don’t have an aacount?</span>
        </span>
        <div className={styles['frame21']}>
          <span className={styles['text10']}>
            <span>Login</span>
          </span>
        </div>
        <div className={styles['frame22']}></div>
        <span className={styles['text12']}>
          <span>Register</span>
        </span>
        <div className={styles['frame8']}>
          <span className={styles['text14']}>
            <span>Email Address</span>
          </span>
        </div>
        <div className={styles['frame18']}>
          <span className={styles['text16']}>
            <span>Password</span>
          </span>
        </div>
        <span className={styles['text18']}>
          <span>Login</span>
        </span>
        <span className={styles['text20']}>
          <span>Recruiter Login</span>
        </span>
      </div>
      <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
        />
        <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>
    </div>

  )
}