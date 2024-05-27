import React, { useState } from 'react';
import './AddSubject.css'
import { Link } from 'react-router-dom';


function AddSubject() {
  const [formData, setFormData] = useState({
    SubjectName: '',
    subjectcode: '',
    course: '',
    teacher: '',
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
      SubjectName: '',
      subjectcode: '',
      course: '',
      teacher: '',
    })
  }

  return (
    <div className='add-subject'>

    <div className='link-bar'>
        <span>Subject</span>
        <p className='link'>Manage / <Link to={'/subject'}  style={{color:'#989797'}}>Subject</Link>  / <span>Add Subject</span> </p>
        </div>

       


    <div className='subject-form'>
      <p>Add a subject</p>

       

    <form onSubmit={handleSubmit} className='input-form'>
      <label >
        Subject Name
        <input
          type="text"
          name="SubjectName"
          placeholder='Name'
          value={formData.SubjectName}
          onChange={handleInputChange}
        />
      </label>

     
      <label>
        Subject Code
        <input
          type="text"
          name="subjectcode"
          placeholder='Code'
          value={formData.subjectcode}
          onChange={handleInputChange}
        />
      </label>
      
      <label>
        Course
        <input
        placeholder='Course'
          type="text"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
        />
      </label>
     


      <label>
        Teacher
        <input
        placeholder='Teacher'
          type="text"
          name="teacher"
          value={formData.teacher}
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

export default AddSubject;
