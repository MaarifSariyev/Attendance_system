import React, { useRef, useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard/Dashboard';


const SideBar = () => {

    const [sidebar, setSidebar] = useState("Dashboard")
    

  return (
    <div className='sidebar'>
        <div className='sidebar-elements'>
            <div className={sidebar==="Dashboard"? "tool active" : "tool"}>
                
                 <i class="fa-solid fa-chart-line" id='i'></i>
                 <Link to={'dashboard'}>
                 <span onClick={()=>setSidebar("Dashboard")}>Dashboard</span>
                 </Link> 
                 
            </div>
            <p>Analyse</p>
                <div className='analyse'>
                    <div className={sidebar==="Attendance"? "tool active" : "tool"}>
                        <i class="fa-regular fa-file-lines"></i> <Link to={'attendance'}> <span onClick={()=>setSidebar("Attendance")} >Attendance</span></Link>
                    </div>
                    <div className={sidebar==="Absense"? "tool active" : "tool"}>
                    <i class="fa-solid fa-file-circle-xmark"></i>
                        <Link to={'absense'}>
                        <span onClick={()=>setSidebar("Absense")} >Absense</span>
                         </Link>
                    </div>
                    <div className={sidebar==="Report"? "tool active" : "tool"}>
                        <i class="fa-solid fa-file-signature"></i> <Link to={'rapor'}><span onClick={()=>setSidebar("Report")} >Report</span></Link> 
                    </div>
                </div>
            
            <p>Manage</p>
                <div className="manage">
                    <div className={sidebar==="Teacher"? "tool active":"tool"}>
                    <i class="fa-solid fa-chalkboard-user"></i>
                        <Link to={'Teacher'}>
                       <span onClick={()=>setSidebar("Teacher")}>Teacher</span>
                        </Link>
                    </div>
                    <div className={sidebar==="Student"? "tool active":"tool"}>
                    <i class="fa-solid fa-user-graduate"></i>
                        <Link to={'Student'}>
                        <span onClick={()=>setSidebar("Student")} >Student</span>
                        </Link>
                    </div>
                    <div className={sidebar==="Subject"?"tool active":"tool"}>
                    <i class="fa-solid fa-book-open"></i>
                        <Link to={'subject'}>
                       <span onClick={()=>setSidebar("Subject")} >Subject</span>
                        </Link>
                    </div>
                </div>
        
            <p>Chal Chal Nikal</p>
            <div className='tool'>
            <i class="fa-solid fa-right-from-bracket"></i>
            <Link to={'login'}>
            
            <span>Log out</span>
            </Link>
            </div>
        
        </div>
    </div>
  )
}

export default SideBar