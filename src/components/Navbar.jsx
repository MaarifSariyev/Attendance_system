import React from 'react'
import './Navbar.css'
import person from '../assets/profile.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Attendify</h2>
        <input type="text" placeholder='Search' />
        <div className='account'>
        <i className="fa-regular fa-bell"></i>
        <img src={person} alt="" />
        <span>Peterpan</span>
        </div>

    </div>
  )
}

export default Navbar