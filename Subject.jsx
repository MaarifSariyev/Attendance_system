import React, { useContext } from 'react'
import './Subject.css'
import { Link } from 'react-router-dom'
import { DataContext } from '@/Context';

const Subject = () => {

  const { subjectdata } = useContext(DataContext);

  return (
    <div className='subject'>

    <div className='link-bar'>
      <div>
      <span>Subject</span>
      <p>Manage / <span>Subject</span> </p>
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
  <th>#</th>
  <th>Subject Name</th>
  <th>Course</th>
  <th>Semester</th>
  <th>Assigned Teacher</th>
  <th>Action</th>
  
</tr>
</thead>

<tbody>
{subjectdata.map((item, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{item.SubjectName}</td>
                          <td>{item.subjectcode}</td>
                          <td>{item.subjectcourse}</td>
                          <td>{item.subjectteacher}</td>
                          <td><i class="fa-solid fa-note-sticky"></i> <i class="fa-solid fa-trash-can"  style={{color:"#ff4861" }}></i></td>
                        </tr>
                      ))}


</tbody>
      </table>
    </div>
  </div>
  )
}

export default Subject                                          