import React, { createContext, useState } from 'react'
 export const datacontext = createContext()
const Dataprovider = ({children}) => {
  let [newuserid , setNewuserid] = useState("")
  let [newuserpas , setnewuserpas] = useState("")
 
  return (
    <datacontext.Provider value={{
      newuserid,newuserpas,setnewuserpas,setNewuserid
    }}>
      {
        children
      }
    </datacontext.Provider> 
    )
}

export default Dataprovider