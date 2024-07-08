import React, { useContext, useState } from 'react'
import './AddTeacher.css'
import { Link } from 'react-router-dom';
import { DataContext } from '@/Context';

const AddTeacher = ({onTeacherChange}) => {

  const [inputValue, setInputValue] = useState('');

  const { addTeacherData } = useContext(DataContext);




  const [formData, setFormData] = useState({
      teachername: '',
      teacherusername: '',
      teacheremail: '',
      teacherpassword: '',
      teacheraddress: '',
  });



  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      addTeacherData(formData);
      setFormData({
        teachername: '',
        teacherusername: '',
        teacheremail: '',
        teacherpassword: '',
        teacheraddress: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = (e) => {
    e.preventDefault()
    setFormData({
      teachername: '',
      teacherusername: '',
      teacheremail: '',
      teacherpassword: '',
      teacheraddress: '',
    })
  }


  return (
    <div className='add-teacher'>
        <div className='link-bar'>
        <span>Teacher</span>
        <p className='link'>Manage / <Link to={'/teacher'} style={{color:'#989797'}}>Teacher</Link>   / <span>Add Teacher</span> </p>
        </div>

        <div className='teacher-form'>
      <p>Add a teacher</p>
     
     

    <form onSubmit={handleSubmit} className='input-form'>
      <label >
        First Name
        <input
          type="text"
          name="teachername"
          placeholder='Name'
          value={formData.teachername}
          onChange={handleChange}
        />
      </label>

     <div className='input-container'>
      <label>
        Username
        <input
          type="text"
          name="teacherusername"
          placeholder='Username'
          value={formData.teacherusername}
          onChange={handleChange}        />
      </label>
      
      <label>
        Password
        <input
          type="password"
          placeholder='Password'
          name="teacherpassword"
          value={formData.teacherpassword}
          onChange={handleChange}        />
      </label>
      </div>


      <label>
        Email
        <input
          type="email"
          placeholder='sam@gmail.com'
          name="teacheremail"
          value={formData.teacheremail}
          onChange={handleChange}        />
      </label>
     
      <label>
        Address
        <input
          type="address"
          name="teacheraddress"
          placeholder='Apartment, studio, or floor'
          value={formData.teacheraddress}
          onChange={handleChange}        />
      </label>
      <div className="buttons">
      <button type="submit" className='submit'>Submit</button>
      <button type='reset' className='reset' onClick={handleReset}>Reset</button>
      </div>
    </form>
    </div>
  
      
    </div>
  )
}

export default AddTeacher