import React, { createContext, useState } from 'react'
 export const datacontext = createContext()
const Dataprovider = ({children}) => {
  let [newuserid , setNewuserid] = useState("")
  let [newuserpas , setnewuserpas] = useState("")
  let [loginuserid , setloginuserid] = useState("")
  let [loginuserpas , setloginuserpas] = useState("")
   const[addproducttable ,setaddproducttable] = useState(false)
    const[productlistname ,setproductlistname]= useState("")
    const [itms,setitms] =useState([
      {
      id:1,
      name:"Vegetables",
      price:124
     },{
      id:2,
      name:"Electronics",
      price:120,
     },{
      id:3,
      name:"dress",
      price:120,
     },{
      id:4,
      name:"shoes",
      price:120,
     }
    ])
  return (
    <datacontext.Provider value={{
      newuserid,newuserpas,setnewuserpas,setNewuserid,
      setloginuserid,setloginuserpas,loginuserid,loginuserpas,addproducttable,setaddproducttable,
      productlistname,setproductlistname,itms,setitms
    }}>
      {
        children
      }
    </datacontext.Provider> 
    )
}

export default Dataprovider