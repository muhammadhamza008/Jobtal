import './App.css';
import React, {useState} from "react";
import SignUptest from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';
import SignUpPage from './components/sign-up-page';
import {Route, Routes} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom@6.0.0-alpha.2'
import {Login} from './Login';
import Register from './Register';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';
import Resume from './components/resume';
import ResumeDisplay from './components/resumedisplay';
import Navbar from './components/homepages/navbar';


function App() {
  
  return (
    <div>
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

    </div>
  );
  

}

export default App;
