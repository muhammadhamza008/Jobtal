import React from 'react'
import logo from './logo.png';
import homeimg1 from './homeimg1.jpg';
import styles from './home-page-jobseeker.module.css'

const HomePageJobSeeker = (props) => {
  return (
    <div>
      <div className={styles['home-page-job-seeker']}>
        <div className={styles['search']}>
          <div className={styles['group2']}>
           
                <button type="button" className={styles["button-1"]} onclick={console.log("ar")}>Post a New Job</button> 
                
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
            src="/playground_assets/hhrumin11930-6k9.svg"
            alt="hhrumin11930"
            className={styles['hhrumin1']}
          />
          <img
            src="/playground_assets/line11942-66xm.svg"
            alt="Line11942"
            className={styles['line1']}
          />
          <span className={styles['text08']}>
            <span>Lahore</span>
          </span>
          <span className={styles['text10']}>
            <span>View Applied Jobs</span>
          </span>
          <span className={styles['text12']}>
            <span>Update Profile</span>
          </span>
          <div className={styles['resume']}>
            <span className={styles['text14']}>
              <span>Create a resume</span>
            </span>
          </div>
        </div>
        <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
        />
      </div>
      <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>

    </div>
  )
}

export default HomePageJobSeeker
