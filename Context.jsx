// DataContext.jsx
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };


  const [subjectdata, setSubjectData] = useState([]);

  const addSubjectData = (newSubjectData) => {
    setSubjectData([...subjectdata, newSubjectData]);
  };


  const [teacherdata, setTeacherData] = useState([]);

  const addTeacherData = (newTeacherData) => {
    setTeacherData([...teacherdata, newTeacherData]);
  };

  return (
    <DataContext.Provider value={{ data, addData , subjectdata , addSubjectData , teacherdata , addTeacherData}}>
      {children}
    </DataContext.Provider>
  );
};
