import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import { datacontext } from '../DataContext/Dataprovider'
import {handleInvalid} from "../functions/handleInvalid"
import { handleInput } from '../functions/handleInput'
const Login = () => {
    const{newuserid,newuserpas,
      setloginuserid,setloginuserpas,loginuserid,loginuserpas,
    
    } = useContext(datacontext)
    const navigate = useNavigate()
    function handleLogin(e){
   
      e.preventDefault()
      if(newuserid===loginuserid && newuserpas==loginuserpas || 1){
        navigate("/Home")
      }
      else{
        alert("wrong pasword or userid")
      }
   }
   
    return (
   <div className='login_container'>
    <form onSubmit={handleLogin}>
    <main className='Login'>
    <input type="text"  placeholder='Enter the Username'
     required
     onInvalid={handleInvalid}
     onInput ={handleInput}
     onChange={(e)=>setloginuserid(e.target.value)}
    />
    <input type="text" placeholder='Enter the passsword'
    required
    onChange={(e)=>setloginuserpas(e.target.value)}
    />
    <p><Link to ="/Newuser">NEW USER SIGN IN HERE</Link></p>
    <button type='submit'>Login In</button>
    </main>
    </form>
   </div>
   
  )
}

export default Login