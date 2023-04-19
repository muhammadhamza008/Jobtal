import './App.css';
<<<<<<< Updated upstream
import React, {useState} from "react";
import SignUptest from './components/homepages/home1.jsx';
=======
import React, {useState, createContext, useReducer} from "react";
import Home from './components/homepages/home1.jsx';
>>>>>>> Stashed changes
import HomePageEmployers from './components/homepages/home-page-employers.jsx';
import SignUpPage from './components/sign-up-page';
import {Route, Routes} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom@6.0.0-alpha.2'
import {Login} from './components/Login';
import {Register} from './Register';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';
import Resume from './components/resume';
import ResumeDisplay from './components/resumedisplay';
import Navbar from './components/homepages/navbar';
<<<<<<< Updated upstream
=======
import SearchJobSeekers from './components/Job Seeker/SearchPageJobSeekers';
import ApplyJob from './components/Job Seeker/ApplyForJobs';
import Logout from './components/Registration/Logout';
import {initialState, reducer} from './reducer/UseReducer';
>>>>>>> Stashed changes

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
<<<<<<< Updated upstream
      <Navbar />
    <Routes>
      <Route path="/">
        <Route index element = {<SignUptest />} />
      </Route>
      <Route path="/employer">
        <Route index element = {<HomePageEmployers />} />
      </Route>
      <Route path="/sign">
        <Route index element = {<Register />} />
      </Route>
      <Route path="/login">
        <Route index element = {<Login />} />
      </Route>
      <Route path="/signup">
        <Route index element = {<SignUpPage />} />
      </Route>
      <Route path="/jobseeker">
        <Route index element = {<HomePageJobSeeker />} />
      </Route>
      <Route path="/resume">
        <Route index element = {<Resume />} />
      </Route>
      <Route path="/resumedisplay">
        <Route index element = {<ResumeDisplay/>} />
      </Route>
    </Routes>
=======
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
>>>>>>> Stashed changes

          <Route path="/logout" index element = {<Logout />} />
            
        </Routes>
      </UserContext.Provider>
    </div>
  );
  

}

export default App;
