import React from 'react'
import './Absense.css'
import { Link } from 'react-router-dom'


const Absense = () => {
  return (
    <div className='absense'>

    <div className='link-bar'>
      
      <span>Absence</span>
      <p>Analyse / <span>Absence</span> </p>
  
      
    </div>



  

    <div className='absense-table'>


            <div className='absense-search-bar'>
                <span>Absence Records</span>
                
            </div>

           <table>
<thead>
<tr>
  <th>Student Name</th>
  <th>Course</th>
  <th>Semester</th>
  <th>Absence Reason</th>
  <th>Absence For</th>
  <th>Action</th>
</tr>
</thead>

<tbody>
<tr>
  <td>Maria</td>
  <td>BICT</td>
  <td>First</td>
  <td>Sick</td>
  <td>1 day</td>
  <td className='fontcontainer'><div className='fontcorrect'><i class="fa-solid fa-check"></i></div> <div className='fontwrong'><i class="fa-solid fa-x"></i></div></td>
</tr>
<tr>
  <td>Maria</td>
  <td>BICT</td>
  <td>First</td>
  <td>Sick</td>
  <td>1 day</td>
  <td className='fontcontainer'><div className='fontcorrect'><i class="fa-solid fa-check"></i></div> <div className='fontwrong'><i class="fa-solid fa-x"></i></div></td>
</tr>
</tbody>
      </table>
    </div>
  </div>
  )
}

export default Absense