import React from 'react';
import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbars/employee_navbar';
import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const SearchJobSeekers = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    // const jobs = location.state.jobs;
    const [jobs, setJobs] = useState([]);

    const handleClick = () =>{
        navigate('/applyjob');
    }

    useEffect(() => {
        axios
          .post('http://localhost:3001/api/searchjobs')
          .then(res => setJobs(res.data))
          .catch(err => console.log(err));
      }, []);

    return(
        <div>
            {/* <Navbar></Navbar> */}
            <h1 style={{position: 'absolute', top:'200px',left: '20px', fontSize: "50px"}}>
                Your search results:
            </h1>
            <div style={{display:'flex', flexDirection:'column', borderRadius:'300px', marginTop:'15vh', rowGap:"40px", marginRight:'10px', marginLeft:'10px'}}>
                <div style={{display: 'flex', flexDirection:'row', columnGap:'20px'}}>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        {jobs.map((job)=>(
                            <div key={job.id}>
                                <h3>{job.title}</h3>
                                <p>Location: {job.location}</p>
                          
                                <p>Industry: {job.industry}</p>

                                <p>Job Level: {job.jobLevel}</p>

                                <p>Salary: {job.salary}</p>

                                <p>Reigstration Number: {job.regNumber}</p>
                     
                                <button style={{}} onClick={handleClick}>Apply Now</button>
                            </div>
                        ))}
                    </div>
                    {/* <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}} onClick={handleClick}>Apply Now</button>
                    </div> */}
                </div>
                {/* <div style={{display: 'flex', flexDirection:'row', columnGap:'20px'}}>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}} onClick={handleClick}>Apply Now</button>
                    </div>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}} onClick={handleClick}>Apply Now</button>
                    </div>
                </div>              */}
            </div>

        </div>
    )




}

export default SearchJobSeekers;