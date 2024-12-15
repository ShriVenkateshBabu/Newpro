import React from 'react'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    function handleLogin(){
      navigate("/Home")
    
   }
    return (
   <div className='login_container'>
    <main className='Login'>
    <input type="text"  placeholder='Enter the Username'
     
    />
    <input type="text" placeholder='Enter the passsword'
    />
    <p><Link to ="/Newuser">NEW USER SIGN IN HERE</Link></p>
    <button onClick={handleLogin}>Login In</button>
    </main>
   </div>
   
  )
}

export default Login