import React, { useState } from 'react';
import img1 from './logo.png';
import './JobSearch.css';

export default function JobSearch() {
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');
  const [dropdownValue4, setDropdownValue4] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access the selected values via the state variables here
    console.log(dropdownValue1, dropdownValue2, dropdownValue3, dropdownValue4);
  };

  return (
    <form onSubmit={handleSubmit}>
        <img src={img1} alt="" className="img-edit" />
        <h1 className="page-title">Search for Jobs</h1>
        <ul className="search-description">Looking for a job? Let us make it easier for you! Search from the dropdown below to search for jobs</ul>
        <h1 className="inner-title">Select one or more options to search</h1>
        <label className="industry-heading">
            Industry:
            <select value={dropdownValue1} onChange={(e) => setDropdownValue1(e.target.value)}>
            <option value="option1">Please select industry</option>
            <option value="Tech">Tech</option>
            <option value="Film and Drama">Film and Drama</option>
            <option value="Medical">Medical</option>
            <option value="Textile">Textile</option>
            <option value="FMCG">FMCG</option>
            </select>
        </label>
        
        <label className="location-heading">
            Locations:
            <select value={dropdownValue2} onChange={(e) => setDropdownValue2(e.target.value)}>
            <option value="option1">Please select location</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            </select>
        </label>
        
        <label className="joblevel-heading">
            Job Level:
            <select value={dropdownValue3} onChange={(e) => setDropdownValue3(e.target.value)}>
            <option value="option1">Please select Job level</option>
            <option value="CEO">CEO</option>
            <option value="Director">Director</option>
            <option value="Senior Manager">Senior Manager</option>
            <option value="Manager">Manager</option>
            <option value="Floor Manager">Floor Manager</option>
            <option value="Officer level 3">Officer level 3</option>
            <option value="Officer level 2">Officer level 2</option>
            <option value="Officer level 1">Officer level 1</option>
            </select>
        </label>
        
        <label className="salary-heading">
            Salary:
            <select value={dropdownValue4} onChange={(e) => setDropdownValue4(e.target.value)}>
            <option value="option1">Please select Salary range</option>
            <option value="40000-59999">40,000-59,999</option>
            <option value="60000-99999">60,000-99,999</option>
            <option value="100000-149999">100,000-149,999</option>
            <option value="150000-199999">150,000-199,999</option>
            <option value="200000-299999">200,000-299,999</option>
            <option value="300000-499999">300,000-499,999</option>
            <option value="500000">500,000 and above</option>
            </select>
        </label>
        
        <button className="button-style" type="submit">Search</button>
    </form>
  );
}