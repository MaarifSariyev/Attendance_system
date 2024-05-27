import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <nav>
            Attendify
        </nav>

        <main>
            <div className='login-text'>
                <h1>Attendance <span>for your business</span></h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eveniet, itaque accusantium odio, soluta, corrupti 
                     aliquam quibusdam tempora at cupiditate quis eum maiores 
                     libero veritatis? Dicta facilis sint aliquid ipsum atque?</p>
            </div>

           
                <form className='login-register'>
                    <div className='btn-container'>
                        <button className='btn'><input type="radio" name='kimlik' value='Teacher' id='teacher' /><label htmlFor="teacher">Teacher</label></button>
                        <button className='btn'><input type="radio" name='kimlik' value='Admin' id='admin' /><label htmlFor="admin">Admin</label></button>
                    </div>
                <div className="name-box">
                    <label for="name">UserName</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className="password">
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                </div>
                <div className='remember'>
                <input type="checkbox" id='checkbox'/> Remember me
                </div>
                <Link to={'/dashboard'}>
                <button className='sign-in'>Sign In</button>
                </Link>
                <p style={{color:"#6C757D", cursor:"pointer"}}>Forgot password ?</p>
                <p>Don't have an account? <span className='here'>Register here</span></p>
                </form>
          
        </main>
    </div>
  )
}

export default Login