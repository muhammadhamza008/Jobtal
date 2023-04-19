import React from 'react'
import logo from './logo.png';
import styles from './navbar.module.css'
import homeimg2 from './homeimg2.jpg';
import LogoutButton from './logoutbutton';
import LoginButton from './loginbutton';
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const resume = () =>{
    navigate("/resume")
  } 
  return (
    <div>
      <div className={styles['sign-in']}><LogoutButton/></div>
      <div className={styles['home-page-employers']}>
        <div className={styles['search']}>
          <div className={styles['group2']}>       
          </div>
          <div className={styles['group1']}>
          </div>
        </div>
        <div className={styles['menu']}>
          <img
            src="/playground_assets/hhrumin19331-tsn.svg"
            alt="hhrumin19331"
            className={styles['hhrumin1']}
          />
          <img
            src="/playground_assets/line19333-ojv.svg"
            alt="Line19333"
            className={styles['line1']}
          />
          <span className={styles['text08']}>
            <span>Lahore</span>
          </span>
          <span className={styles['text10']}>
            <span>Update Profile</span>
          </span>
          <span className={styles['text12']}>
            <span>Update Application Form</span>
          </span>
          <span className={styles['text14']}>
              <a href="" onClick={resume}>Create a Resume</a>             
            </span>
            {/* <span className={styles['text14']}>
              <a href="" onClick={resume}>Logout</a>             
            </span>        */}
        </div>
        <img
          src="/playground_assets/logo19382-r7mk-200h.png"
          alt="logo19382"
          className={styles['logo1']}
        />
      </div>
      <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
        />
    </div>
  )
}

export default Navbar
