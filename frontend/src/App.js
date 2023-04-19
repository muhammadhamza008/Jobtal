import './App.css';
import React, {useState} from "react";
import Home from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';

import {Route, Routes} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom@6.0.0-alpha.2'
import LoginEmployee from './components/Registration/LoginEmployee';
import LoginEmployer from './components/Registration/LoginEmployer';
import RegisterEmployee from './components/Registration/RegisterEmployee';
import RegisterEmployers from './components/Registration/RegisterEmployers';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';
import Resume from './components/resume/resume';
import ResumeDisplay from './components/resume/resumedisplay';
import Navbar from './components/homepages/navbar';
import SearchJobSeekers from './components/Job Seeker/SearchPageJobSeekers';
import ApplyJob from './components/Job Seeker/ApplyForJobs';
import PostJob from './components/Employers/PostJob';

function App() {
  
  return (
    <div>

    <Routes>
      <Route path="/" element = {<Home />} />

      <Route path="/employer" index element = {<HomePageEmployers />} />
        
      <Route path="/signupemployee" index element = {<RegisterEmployee />} />
        
      <Route path="/signupemployer" index element = {<RegisterEmployers />} />
        
      <Route path="/loginemployee" index element = {<LoginEmployee />} />
        
      <Route path="/loginemployer" index element = {<LoginEmployer />} />
       
      <Route path="/jobseeker" index element = {<HomePageJobSeeker />} />
        
      <Route path="/resume" index element = {<Resume />} />
        
      <Route path="/resumedisplay" index element = {<ResumeDisplay/>} />
        
      <Route path="/searchJobSeeker" index element = {<SearchJobSeekers />} />

      <Route path="/applyjob" index element = {<ApplyJob />} />

      <Route path="/postjob" index element = {<PostJob />} />

        
    </Routes>

    </div>
  );
  

}

export default App;
