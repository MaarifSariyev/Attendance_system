import React from 'react'
import './Rapor.css'

export const Rapor = () => {
  return (
    <div className="rapor">
         <div className='link-bar'>
      <div>
      <span>Attendance</span>
      <p>Teack / Attendance /  <span>Attendance Sheet</span> </p>
      </div>
      
    </div>
    <div className='rapor-generate-sheet'>
        
        <select name="Course" id="course">
            <option value="java">BICT</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <label htmlFor="Course">Course</label>

        
        <select name="Subject" id="subject">
            <option value="java">Advance Java</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <label htmlFor="Subject">Subject</label>

        
        <select name="Section" id="section">
            <span>Subject</span>
            <option value="java">A</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <label htmlFor="Section">Section</label>
        
        <select name="month" id="month">
            <option value="a">Jan</option>
            <option value="b">B</option>
            <option value="c">B</option>
        </select>
        <label htmlFor="month">Month</label>
        
        <select name="year" id="year">
            <option value="1">2024</option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <label htmlFor="year">Year</label>


         <button>Generate Sheet</button>

    </div>
    </div>
  )
}
