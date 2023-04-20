import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import homeimg1 from './homeimg1.jpg';
import styles from './home-page-jobseeker.module.css';

const HomePageJobSeeker = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setErrorMessage('');
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/searchjobs', {
        params: {
          organizationName: searchTerm,
          location: searchTerm,
          jobLevel: searchTerm,
          salary: searchTerm,
          regNumber: searchTerm,
        },
      });
      if (response.data.length === 0) {
        setErrorMessage('No jobs found. Please try again.');
        setJobs([]);
      } else {
        setJobs(response.data);
        navigate.push({ pathname: '/searchJobSeeker', state: { jobs: response.data } });
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div>
      <div className={styles['home-page-job-seeker']}>
        <div className={styles['search']}>
          <div className={styles['group2']}>
            <button
              type="button"
              className={styles['button-1']}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className={styles['group1']}>
            <span className={styles['text02']}>
              <input
                type="text"
                placeholder="Company name, job title, location"
                className={styles['textbar']}
                value={searchTerm}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <span className={styles['text04']}>
          <span>Jobs for everyone</span>
        </span>
        <span className={styles['text06']}>
          <span>Jobtal</span>
        </span>
        {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
      </div>
      <img alt="not loading" src={homeimg1} className={styles['img1']} />
    </div>
  );
};

export default HomePageJobSeeker;
