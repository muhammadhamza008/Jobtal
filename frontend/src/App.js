import './App.css';
import React, {useState} from "react";
import SignUptest from './components/homepages/home1.jsx';
import HomePageEmployers from './components/homepages/home-page-employers.jsx';
import SignUpPage from './components/sign-up-page';
import {Route, Routes} from 'react-router-dom';
import {Login} from './Login';
import {Register} from './Register';
import HomePageJobSeeker from './components/homepages/home-page-jobseeker';


function App() {
  
  return (
    
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

      // {/* <Route>
      //   currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      // </Route> */}
      //  {/* <Route path="users" >
      //     <Route index element = {<SignUptest />} />
      //     <Route path = "create" element = {<SignUptest data="User Data" />} />
      //     <Route path = "edit" element = {<SignUptest />} />
      //   </Route>  */}

    </Routes>
    // <div>
    //   <Register/>
    // </div>
  );

}

export default App;
