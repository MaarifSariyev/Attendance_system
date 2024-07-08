import React, { useContext, useEffect, useState } from 'react'
import './Student.css'
import { Link } from 'react-router-dom'
import { DataContext } from '@/Context';

const Student = () => {

  const { data } = useContext(DataContext);

  


  return (
    <div className='student'>

    <div className='link-bar'>
      <div>
      <span>Student</span>
      <p>Manage / <span>Student</span> </p>
      </div>
      <Link to={'AddStudent'}>
      <button>Add Student</button>
      </Link>
    </div>



  

    <div className='student-table'>


            <div className='student-search-bar' >
                <span>Current Student</span>
                <input type="text" placeholder='Search...' />
            </div>
            <div className="table-container">
           <table>
              <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
              </thead>

              <tbody>
              {data.map((item, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.firstName}</td>
                          <td>{item.course}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                         <td>{item.password}</td>
                          <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can"  style={{color:"#ff4861" }}></i></td>
                        </tr>
                      ))}

              </tbody>
      </table>
      </div>
    </div>
  </div>
  )
}

export default Student                                          