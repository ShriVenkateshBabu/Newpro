import React, { useState } from 'react'
import imgdeadpool from "../Images/download.jpeg"
const Home = () => {
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
  function handleAddProductList(){
    setaddproducttable(true)
  }
  function addproductstolist(){
   const new_id = itms.length ? itms[itms.length-1].id + 1:1;
   const new_itm = {id:new_id,name:productlistname,price:120}
   const update_itm = [...itms,new_itm]
   setitms(update_itm)
   setaddproducttable(false)
  }
  function handledeletetable(id){
    const del_itm = itms.filter((itms)=>itms.id!=id)
    setitms(del_itm)

  }
  return (
  <div className='Home'>
   <table>
     <thead>
      <tr>
        <th style={{color:'white'}}>Products ID</th>
        <th style={{color:'white'}}>Products</th>
        <th style={{color:'white'}}>Click Me</th>
        <th style={{color:'white'}}> Delete</th>
        
      </tr>
     </thead>
    <tbody>
      {itms.map((item,index) =>(
        
        <tr key ={index}>
        <td style={{color:"whitesmoke"}}>
        {item.id}
        </td>
        <td style={{color:"whitesmoke"}}>
        {item.name}
        </td>
        <td style={{color:"whitesmoke"}}>
        <button>ClickMe</button>
        </td>
        <td>
        <button onClick={()=>handledeletetable(item.id)}>Delete</button>
        </td>
         
      </tr>))}
    </tbody>
   </table>
   <br></br>
   <button onClick={handleAddProductList}style={{width:"190px"}}>Add Product List</button>
   <br></br>
   {addproducttable && 
   <>
   <input type = "text" 
   onChange={(e)=>setproductlistname(e.target.value)}
   placeholder='enter the productlist name'/>
   <button onClick={addproductstolist} style={{width:"190px",marginLeft:"10px"}}>add to the products List</button>
   </>
   }
   
   
  </div>
   

  )
}

export default Home