import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <div className='student'>

    <div className='link-bar'>
      <div>
      <span>Student</span>
      <p>Manage/ <span>Student</span> </p>
      </div>
      <Link to={'AddStudent'}>
      <button>Add Student</button>
      </Link>
    </div>



  

    <div className='student-table'>


            <div className='student-search-bar'>
                <span>Current Student</span>
                <input type="text" placeholder='Search...' />
            </div>

           <table>
<thead>
<tr>
  <th>Student Name</th>
  <th>Course</th>
  <th>Email</th>
  <th>Username</th>
  <th>Password</th>
  <th>Action</th>
</tr>
</thead>

<tbody>
<tr>
  <td>Monoj Baj</td>
  <td>BİT</td>
  <td>Monoj1@gmail.com</td>
  <td>Monoj1</td>
  <td>King Monoj</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861" }}></i></td>
</tr>
<tr>
  <td>Mario Db</td>
  <td>BİT</td>
  <td>Maridb1@gmail.com</td>
  <td>Mariodb1</td>
  <td>Mari12321</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
</tr>
<tr>
  <td>Kiara Advani</td>
  <td>BİT</td>
  <td>KiaraAdvani1@gmail.com</td>
  <td>KiaraAdvani1</td>
  <td>Advani24862</td>
  <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
</tr>



</tbody>
      </table>
    </div>
  </div>
  )
}

export default Student                                          