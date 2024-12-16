import React, { createContext, useState } from 'react'
 export const datacontext = createContext()
const Dataprovider = ({children}) => {
  let [newuserid , setNewuserid] = useState("")
  let [newuserpas , setnewuserpas] = useState("")
  let [loginuserid , setloginuserid] = useState("")
  let [loginuserpas , setloginuserpas] = useState("")
 
  return (
    <datacontext.Provider value={{
      newuserid,newuserpas,setnewuserpas,setNewuserid,
      setloginuserid,setloginuserpas,loginuserid,loginuserpas
    }}>
      {
        children
      }
    </datacontext.Provider> 
    )
}

export default Dataprovider