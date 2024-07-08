import React, { useContext, useState } from 'react';
import './AddStudent.css'
import { Link } from 'react-router-dom';
import { DataContext } from '@/Context';


function AddStudent() {
  const [inputValue, setInputValue] = useState('');
  const { addData } = useContext(DataContext);




  const [formData, setFormData] = useState({
    firstName: '',
    course: '',
    password: '',
    email: '',
    username: '',
  });



  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      addData(formData);
      setFormData({
        firstName: '',
        course: '',
        password: '',
        email: '',
        username: '',
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
      firstName: '',
      course: '',
      password: '',
      email: '',
      username: '',
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
          onChange={handleChange}
        />
      </label>

      <label >
        Username
        <input
          type="text"
          name="username"
          placeholder='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>

     
      <label>
      Course
        <input
          type="text"
          name="course"
          placeholder='course'
          value={formData.course}
          onChange={handleChange}        />
      </label>
      
      <label>
        Password
        <input
        placeholder='Password'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}        />
      </label>
     


      <label>
        Email
        <input
        placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}        />
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
