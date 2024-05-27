import React, { useState } from 'react'
import './AddTeacher.css'
import { Link } from 'react-router-dom';

const AddTeacher = ({onTeacherChange}) => {

    const [formData, setFormData] = useState({
        firstName: '',
        username: '',
        password: '',
        email: '',
        address: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        onTeacherChange(formData)
      };

      
      const handleReset = (e) => {
        e.preventDefault()
        setFormData({
          firstName: '',
          username: '',
          password: '',
          email: '',
          address: '',
        })}


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
          name="firstName"
          placeholder='Name'
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>

     <div className='input-container'>
      <label>
        Username
        <input
          type="text"
          name="username"
          placeholder='Username'
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      
      <label>
        Password
        <input
          type="password"
          placeholder='Password'
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      </div>


      <label>
        Email
        <input
          type="email"
          placeholder='sam@gmail.com'
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
     
      <label>
        Address
        <input
          type="address"
          name="address"
          placeholder='Apartment, studio, or floor'
          value={formData.address}
          onChange={handleInputChange}
        />
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