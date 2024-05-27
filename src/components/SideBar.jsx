import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-elements'>
            <div className='tool active'>
                <Link to={'dashboard'}>
                 <i class="fa-solid fa-chart-line" id='i'></i> <span >Dashboard</span>
                 </Link>
            </div>
            <p>Analyse</p>
                <div className='analyse'>
                    <div className='tool'>
                        <i class="fa-regular fa-file-lines"></i> <Link to={'attendance'}> <span >Attendance</span></Link>
                    </div>
                    <div className='tool'>
                    <i class="fa-solid fa-file-circle-xmark"></i>
                        <Link to={'absense'}>
                        <span >Absence</span>
                         </Link>
                    </div>
                    <div className='tool'>
                        <i class="fa-solid fa-file-signature"></i> <Link to={'rapor'}><span >Report</span></Link> 
                    </div>
                </div>
            
            <p>Manage</p>
                <div className="manage">
                    <div className='tool'>
                    <i class="fa-solid fa-chalkboard-user"></i>
                        <Link to={'Teacher'}>
                       <span >Teacher</span>
                        </Link>
                    </div>
                    <div className='tool'>
                    <i class="fa-solid fa-user-graduate"></i>
                        <Link to={'Student'}>
                        <span >Student</span>
                        </Link>
                    </div>
                    <div className='tool'>
                    <i class="fa-solid fa-book-open"></i>
                        <Link to={'subject'}>
                       <span >Subject</span>
                        </Link>
                    </div>
                </div>
        
            <p>Chal Chal Nikal</p>
            <div className='tool'>
            <Link to={'login'}>
            <i class="fa-solid fa-right-from-bracket"></i><span>Log out</span>
            </Link>
            </div>
        
        </div>
    </div>
  )
}

export default SideBar