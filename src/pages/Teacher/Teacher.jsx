import React from 'react'
import './Teacher.css'
import { Link } from 'react-router-dom';


const Teacher = ({newTeacher}) => {
    console.log(newTeacher);

  



  return (
    <div className='teacher'>

      <div className='link-bar'>
        <div>
        <span>Teacher</span>
        <p>Manage/ <span>Teacher</span> </p>
        </div>
        <Link to={'AddTeacher'}>
        <button>Add Teacher</button>
        </Link>
      </div>



    

      <div className='teacher-table'>


              <div className='teacher-search-bar'>
                  <span>Current Teachers</span>
                  <input type="text" placeholder='Search...' />
              </div>

             <table>
  <thead>
  <tr>
    <th>Teacher Name</th>
    <th>Address</th>
    <th>Email</th>
    <th>Username</th>
    <th>Password</th>
    <th>Action</th>
  </tr>
  </thead>

  <tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861" }}></i></td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can" style={{color:"#ff4861"}}></i></td>
  </tr>
  
  </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teacher