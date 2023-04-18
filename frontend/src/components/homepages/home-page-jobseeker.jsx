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
           
                <button type="button" className={styles["button-1"]} onclick={console.log("ar")}>Search</button> 
                
          </div>
          <div className={styles['group1']}>
            <span className={styles['text02']}>
              <input type="text" placeholder="Company name, job title, location" className={styles["textbar"]} />
            </span>
          </div>

        </div>
        <span className={styles['text04']}>
          <span>Jobs for everyone</span>
        </span>
        <span className={styles['text06']}>
          <span>Jobtal</span>
        </span>

      </div>
      <img alt="not loading" src = {homeimg1} className = {styles['img1']}/>

    </div>
  )
}

export default HomePageJobSeeker
