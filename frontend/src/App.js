import './App.css';
import Home from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';

import {Route, Routes} from 'react-router-dom';
import React, {useState, createContext, useReducer} from "react";
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
import Logout from './components/Registration/Logout';
import {initialState, reducer} from './reducer/UseReducer';
import Admin from './components/Admin/Admin';
import Jobseekers from './components/Admin/Jobseekers';
import Recruiter from './components/Admin/Recruiter';
import JobsData from './components/Admin/JobsData';
import LoginAdmin from './components/Registration/LoginAdmin';
import AllJobs from './components/homepages/AllJobs';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Navbar/>
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

          <Route path="/logout" index element = {<Logout />} />

          <Route path="/admin" index element = {<Admin />} />

          <Route path="/jobseekers" index element = {<Jobseekers />} />

          <Route path="/recruiter" index element = {<Recruiter />} />

          <Route path="/jobsdata" index element = {<JobsData />} />

          <Route path="/loginadmin" index element = {<LoginAdmin />} />

          <Route path="/alljobs" index element = {<AllJobs />} />
            
        </Routes>
      </UserContext.Provider>
    </>
  );
  

}

export default App;
