import './App.css';
import { UserContext } from './components/Job Seeker/UserContext';

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
import Navbar from './components/navbars/employee_navbar';
import HomeNavbar from './components/navbars/home_navbar';
import EmployerNavbar from './components/navbars/employer_navbar';
import SearchJobSeekers from './components/Job Seeker/SearchPageJobSeekers';
import ApplyJob from './components/Job Seeker/ApplyForJobs';
import PostJob from './components/Employers/PostJob';
import EmployeeProfile from './components/Job Seeker/employeeprofile';
import EmployerProfile from './components/Employers/employerprofile';
import EmployeeSearch from './components/Employers/employeesearch';

function App() {
  
  const [userEmail, setUserEmail] = useState("");
  const userContextValue = {userEmail, setUserEmail}; // Added new line

  return (

      <div>
        <Routes>
          <Route path="/" element = {<><HomeNavbar/> <Home /></>} />

          <Route path="/employer" index element = {<><EmployerNavbar/><HomePageEmployers /> </>} />
            
          <Route path="/signupemployee" index element = {<><HomeNavbar/> <RegisterEmployee /></>} />
            
          <Route path="/signupemployer" index element = {<><HomeNavbar/> <RegisterEmployers /></>} />
            
          <Route path="/loginemployee" index element = {<><HomeNavbar/> <LoginEmployee /></>} />
            
          <Route path="/loginemployer" index element = {<><HomeNavbar/> <LoginEmployer /></>} />
           
          <Route path="/jobseeker" index element = {<> <Navbar/><HomePageJobSeeker /></>} />
            
          <Route path="/resume" index element = {<Resume />} />
            
          <Route path="/resumedisplay" index element = {<ResumeDisplay/>} />
            
          <Route path="/searchJobSeeker" index element = {<><EmployerNavbar/><SearchJobSeekers /></>} />

          <Route path="/applyjob" index element = {<ApplyJob />} />

          <Route path="/postjob" index element = {<><EmployerNavbar/><PostJob /></>} />

          <Route path="/employeeprofile" index element = {<><Navbar/><EmployeeProfile /></>} />

          <Route path="/employerprofile" index element = {<><EmployerNavbar/><EmployerProfile /></>} />

            
        </Routes>
      </div>

  );
  

}

export default App;