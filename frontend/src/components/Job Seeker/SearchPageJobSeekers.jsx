import React from 'react';
import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../homepages/navbar';

const searchJobSeekers = (props) => {

    return(
        <div>
            <Navbar></Navbar>
            <h1 style={{position: 'absolute', left: '70px', fontSize: "50px"}}>
                Your search results:
            </h1>
            <div style={{display:'flex', flexDirection:'column', borderRadius:'300px', marginTop:'15vh', rowGap:"40px", marginRight:'10px', marginLeft:'10px'}}>
                <div style={{display: 'flex', flexDirection:'row', columnGap:'20px'}}>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}}>Apply Now</button>
                    </div>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}}>Apply Now</button>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row', columnGap:'20px'}}>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}}>Apply Now</button>
                    </div>
                    <div style={{backgroundColor:'grey', width:'50%', padding:"20px"}}>
                        <h3>JOB TITLE</h3>
                        <p>Full Time/Permanent - Company / Location</p>
                        <p>Job description</p>
                        <button style={{}}>Apply Now</button>
                    </div>
                </div>             
            </div>

        </div>
    )




}

export default searchJobSeekers;