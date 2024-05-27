import React from 'react'
import Login from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Main from './pages/MainPage/Main'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/*' element = {<Main/>}/>
        <Route path='/login' element = {<Login/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App