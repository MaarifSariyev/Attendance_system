import React, { useContext, useState } from 'react';
import './AddSubject.css'
import { Link } from 'react-router-dom';
import { DataContext } from '@/Context';


function AddSubject() {
  const [inputValue, setInputValue] = useState('');
  const { addSubjectData } = useContext(DataContext);




  const [formData, setFormData] = useState({
      SubjectName: '',
      subjectcode: '',
      subjectcourse: '',
      subjectteacher: '',
  });



  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      addSubjectData(formData);
      setFormData({
        SubjectName: '',
      subjectcode: '',
      subjectcourse: '',
      subjectteacher: '',
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
      SubjectName: '',
      subjectcode: '',
      subjectcourse: '',
      subjectteacher: '',
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
          onChange={handleChange}
        />
      </label>

     
      <label>
        Subject Code
        <input
          type="text"
          name="subjectcode"
          placeholder='Code'
          value={formData.subjectcode}
          onChange={handleChange}        />
      </label>
      
      <label>
        Course
        <input
          placeholder='Course'
          type="text"
          name="subjectcourse"
          value={formData.subjectcourse}
          onChange={handleChange}        />
      </label>
     


      <label>
        Teacher
        <input
        placeholder='Teacher'
          type="text"
          name="subjectteacher"
          value={formData.subjectteacher}
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

export default AddSubject;
