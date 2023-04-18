import './App.css';
import React, {useState} from "react";
import Home from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';
import SignUpPage from './components/sign-up-page';
import {Route, Routes} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom@6.0.0-alpha.2'
import {Login} from './Login';
import Register from './Register';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';
import Resume from './components/resume/resume';
import ResumeDisplay from './components/resume/resumedisplay';
import Navbar from './components/homepages/navbar';
import SearchJobSeekers from './components/Job Seeker/SearchPageJobSeekers';


function App() {
  
  return (
    <div>
      {/* <Navbar /> */}
    <Routes>
      <Route path="/">
        <Route index element = {<Home />} />
      </Route>
      <Route path="/employer">
        <Route index element = {<HomePageEmployers />} />
      </Route>
      <Route path="/signup">
        <Route index element = {<Register />} />
      </Route>
      <Route path="/login">
        <Route index element = {<Login />} />
      </Route>
      <Route path="/sign">
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
      <Route path="/searchJobSeeker">
        <Route index element = {<SearchJobSeekers />} />
      </Route>
    </Routes>

    </div>
  );
  

}

export default App;
