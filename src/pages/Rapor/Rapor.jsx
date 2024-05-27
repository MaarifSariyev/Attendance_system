import React from 'react'
import './Rapor.css'

export const Rapor = () => {
  return (
    <div className="rapor">
         <div className='link-bar'>
      <div>
      <span>Attendance</span>
      <p>Analyse / <span>Attendance</span> </p>
      </div>
      
    </div>
    <div className='rapor-generate-sheet'>
        <select name="Subject" id="subject">
            <span>Subject</span>
            <option value="java">Advance Java</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <select name="Subject" id="subject">
            <span>Subject</span>
            <option value="java">Advance Java</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <select name="Subject" id="subject">
            <span>Subject</span>
            <option value="java">Advance Java</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>

        <select name="Section" id="section">
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">B</option>
        </select>

        <select name="Date" id="date">
            <option value="1">2023/03/15</option>
            <option value=""></option>
            <option value=""></option>
        </select>


         <button>Generate Sheet</button>

    </div>
    </div>
  )
}
