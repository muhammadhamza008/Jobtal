import React from 'react'
import logo from './logo.png';
import styles from './home-page-employers.module.css'
import homeimg2 from './homeimg2.jpg';
import LogoutButton from './logoutbutton';
import LoginButton from './loginbutton';


const HomePageEmployers = (props) => {

  return (
    <div>
      <LogoutButton/>

      <div className={styles['home-page-employers']}>
        <div className={styles['search']}>
          <div className={styles['group2']}>
        
          <button type="button" className={styles["button-1"]} onclick={console.log("ar")}>Search Job Seekers</button> 
        
          </div>
          <div className={styles['group1']}>
            <span className={styles['text02']}>
              <input type="text" placeholder="Profession, position or location" className={styles["textbar"]} />
            </span>
          </div>
        </div>
        <span className={styles['text04']}>
          <span>Jobs for everyone</span>
        </span>
        <span className={styles['text06']}>
          <span>Jobtal</span>
        </span>
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
          
          
        </div>
        <img
          src="/playground_assets/logo19382-r7mk-200h.png"
          alt="logo19382"
          className={styles['logo1']}
        />
        <span className={styles['text16']}>
          <span>Jobs for everyone</span>
        </span>
        <div className={styles['sign-in']}>
          <button type="button" className={styles["button-1"]} onclick={console.log("ar")}>Post a New Job</button> 


        </div>
      </div>
      
      <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
        />
        <img alt="not loading" src = {homeimg2} className = {styles['img1']}/>
        
    </div>
  )
}

export default HomePageEmployers
