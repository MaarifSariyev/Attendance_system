import React from 'react'
import './Subject.css'
import { Link } from 'react-router-dom'

const Subject = () => {
  return (
    <div className='subject'>

    <div className='link-bar'>
      <div>
      <span>Subject</span>
      <p>Manage/ <span>Subject</span> </p>
      </div>
      <Link to={'AddSubject'}>
      <button>Add Subject</button>
      </Link>
    </div>



  

    <div className='subject-table'>


            <div className='subject-search-bar'>
                <span>Current Subject</span>
                <input type="text" placeholder='Search...' />
            </div>

           <table>
<thead>
<tr>
  <th>Subject Name</th>
  <th>Course</th>
  <th>Semester</th>
  <th>Assigned Teacher</th>
  <th>Action</th>
  
</tr>
</thead>

<tbody>
<tr>
  <td>C Programming</td>
  <td>BİT</td>
  <td>Monoj1@gmail.com</td>
  <td>Monoj1</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861" }}></i></td>
</tr>
<tr>
  <td>Digital Marketing</td>
  <td>BİT</td>
  <td>Maridb1@gmail.com</td>
  <td>Mariodb1</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
</tr>
<tr>
  <td>OOP</td>
  <td>BİT</td>
  <td>KiaraAdvani1@gmail.com</td>
  <td>KiaraAdvani1</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
</tr>
<tr>
  <td>Data Sturucture</td>
  <td>BİT</td>
  <td>KiaraAdvani1@gmail.com</td>
  <td>KiaraAdvani1</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
</tr>



</tbody>
      </table>
    </div>
  </div>
  )
}

export default Subject                                          