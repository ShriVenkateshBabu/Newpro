import React, { useContext,useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { datacontext } from '../DataContext/Dataprovider'
import {handleInvalid} from "../functions/handleInvalid"
import { handleInput } from '../functions/handleInput'
const Newuser = () => {
    let [retypepass,setretypepass] = useState("")

    const{newuserid,newuserpas,setnewuserpas,setNewuserid} = useContext(datacontext)
    const navigate = useNavigate()
    function handlesignup(e){
        e.preventDefault()
      if(newuserpas===retypepass){
        
        setTimeout(()=>{navigate("/")},2000)
        setretypepass("")
      }
      else{
       setretypepass('password not match') 
      }
    }
    const style = retypepass!==newuserpas? {color:"red"}:{}
    return (
   
    <div className='login_container'>
    <form onSubmit={handlesignup}>
    <main className='Login'>
    <input type="text"  placeholder='Enter Username'
    required
    onChange={(e)=>setNewuserid(e.target.value)}
    value={newuserid}
    onInput={handleInput}
    onInvalid={handleInvalid}
    />
    <input type="text" placeholder='Enter passsword'
    required
    onChange={(e)=>setnewuserpas(e.target.value)}
    value={newuserpas}
    />
    <input type =" text"
    placeholder='Retype the password'
    value={retypepass}
    style={style}
    required
    onChange={(e)=>setretypepass(e.target.value)}
   />
    <button type='submit'>Sign UP</button>
    </main>
    </form>
    </div>
  )
}

export default Newuser