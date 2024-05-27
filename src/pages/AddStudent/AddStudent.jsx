import React, { useState } from 'react';
import './AddStudent.css'
import { Link } from 'react-router-dom';


function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: '',
    username: '',
    password: '',
    email: '',
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
  };
  const handleReset = (e) => {
    e.preventDefault()
    setFormData({
      firstName: '',
      username: '',
      password: '',
      email: '',
    })
  }

  return (
    <div className='add-student'>

    <div className='link-bar'>
        <span>Student</span>
        <p className='link'>Manage / <Link to={'/student'} style={{color:'#989797'}}> Student </Link> / <span>Add Student</span> </p>
        </div>

       


    <div className='student-form'>
      <p>Add a student</p>

       

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
        placeholder='Password'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
     


      <label>
        Email
        <input
        placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
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
  );
}

export default AddStudent;
