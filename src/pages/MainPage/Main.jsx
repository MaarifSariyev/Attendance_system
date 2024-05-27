import React, { useState } from 'react'
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Dashboard from '../Dashboard/Dashboard'
import Teacher from '../Teacher/Teacher'
import AddTeacher from '../AddTeacher/AddTeacher'
import Student from '../Student/Student'
import AddStudent from '../AddStudent/AddStudent'
import Subject from '../Subject/Subject'
import AddSubject from '../AddSubject/AddSubject'
import Absense from '../Absense/Absense'
import Attendance from '../Attendance/Attendance'
import { Rapor } from '../Rapor/Rapor'

const Main = () => {




  const [teacherValue , setTeacherValue] = useState({})

  const handleTeacherChange = (newTeacher)=>{
          setTeacherValue(newTeacher)
  }

  

  console.log(teacherValue)
  console.log(teacherValue.firstName)

  return (
    <div className='container'>
        <Navbar/>
        <div className='elements'>

        <SideBar/>
        <Routes>
            <Route path='/*' element = {<Dashboard/>}/>
           

            <Route path='student' element = {<Student/>}/>

            <Route path='teacher' element = {<Teacher newteacher={teacherValue}/>}/>
            
            <Route path='teacher/AddTeacher' element = {<AddTeacher onTeacherChange = {handleTeacherChange} />}/>
            <Route path='student/AddStudent' element = {<AddStudent/>}/>
            <Route path='subject' element = {<Subject/>}/>
            <Route path='subject/AddSubject' element = {<AddSubject/>}/>
            <Route path='absense' element = {<Absense/>}/>
            <Route path='attendance' element = {<Attendance/>}/>
            <Route path='rapor' element = {<Rapor/>}/>

            
        </Routes>
        </div>
    </div>
  )
}

export default Main