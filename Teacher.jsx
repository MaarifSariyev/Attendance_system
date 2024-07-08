import React, { useContext } from 'react'
import './Teacher.css'
import { Link } from 'react-router-dom';
import { DataContext } from '@/Context';


const Teacher = () => {
  const { teacherdata } = useContext(DataContext);


  



  return (
    <div className='teacher'>

      <div className='link-bar'>
        <div>
        <span>Teacher</span>
        <p>Manage / <span>Teacher</span> </p>
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
    <th>#</th>
    <th>Teacher Name</th>
    <th>Username</th>
    <th>Email</th>
    <th>Password</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
  </thead>

  <tbody>
  {teacherdata.map((item, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.teachername}</td>
                          <td>{item.teacherusername}</td>
                          <td>{item.teacheremail}</td>
                          <td>{item.teacherpassword}</td>
                          <td>{item.teacheraddress}</td>
                          <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can"  style={{color:"#ff4861" }}></i></td>
                        </tr>
                      ))}
  </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teacher