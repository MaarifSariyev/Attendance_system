import React from 'react'
import './Attendance.css'

const Attendance = () => {
  return (
    <div className='attendance'>

    <div className='link-bar'>
      <div>
      <span>Attendance</span>
      <p>Analyse / <span>Attendance</span> </p>
      </div>
      
    </div>

    <div className='attendance-generate-sheet'>
        <select name="Subject" id="subject">
            <option value="java">Advance Java</option>
            <option value="c++">C++</option>
            <option value="phyton">Phyton</option>
        </select>
        <label htmlFor="Subject">Subject</label>

        <select name="Section" id="section">
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">B</option>
        </select>
        <label htmlFor="Section">Section</label>

        <select name="Date" id="date">
            <option value="1">2023/03/15</option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <label htmlFor="Date">Date</label>


         <button>Generate Sheet</button>

    </div>

  

    <div className='attendance-table'>


            <div className='attendance-search-bar'>
                <span>Subject Reports</span>
                
            </div>

           <table>
<thead>
<tr>
  <th>Student Name</th>
  <th>Semester</th>
  <th>Total Present Day</th>
  <th>Total Absence Day</th>
 
</tr>
</thead>

<tbody>
<tr>
  <td>Maria</td>
  <td>First</td>
  <td>10 </td>
  <td>2 </td>
</tr>
<tr>
  <td>Maria</td>
  <td>First</td>
  <td>2 </td>
  <td>10 </td>
</tr>
</tbody>
      </table>
    </div>
  </div>
  )
}

export default Attendance