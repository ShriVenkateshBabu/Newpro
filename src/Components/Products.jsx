import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { datacontext } from '../DataContext/Dataprovider';

const Products = () => {
  const { productsname } = useParams();
  const[searchpro ,setsearchpro] = useState("")
  const incompro = productsname.toLowerCase()
  const [productincoming, setproductincoming] = useState([]);
  const[totalprice ,setTotalprice] = useState()
  const [vegetables, setVegetables] = useState([
    { id: 1, name: "tomato", price: 20,initialprice:20, quantity: 1 },
    { id: 2, name: "brinjal", price: 20,initialprice:20, quantity: 1 },
    { id: 3, name: "cucumber", price: 20, initialprice:20,quantity: 1 }
  ]);

  const [electronics, setElectronics] = useState([
    { id: 1, name: "apple", price: 100000, initialprice:100000,quantity: 1 },
    { id: 2, name: "samsung", price: 100, initialprice:100,quantity: 1 }
    
  ]);
  const [dress, setdress] = useState([
    { id: 1, name: "kurta", price: 100,initialprice:100, quantity: 1 },
    { id: 2, name: "shirt", price: 100,initialprice:100, quantity: 1 },
    { id: 3, name: "shirt2", price: 100, initialprice:100,quantity: 1 }
  ]);
  const [shoe, setshoe] = useState([
    { id: 1, name: "nike", price: 100,initialprice:100, quantity: 1 },
    { id: 2, name: "adidas", price: 100, initialprice:100,quantity: 1 }
  ]);


  useEffect(() => {
    if (incompro=== 'vegetables') {
      setproductincoming(vegetables); 
    } else if (incompro === 'electronics') {
      setproductincoming(electronics);
    }
     else if (incompro === 'dress') {
        setproductincoming(dress);
      }
      else {
        setproductincoming(shoe);
      }
  }, []);

  function handleIncrement(product) {
    const find_price = product.initialprice
  setproductincoming((previousproducts)=>previousproducts
  .map((item)=>product.id ===item.id ?
  {...item,
    price:item.price + find_price,
    quantity:item.quantity + 1}
    :
    item
))
  }
  
  function addtocart(product){
    setTotalprice(product.price)
  }
  
return (
    <div className="Home">
        <input
        type='text'
        placeholder='enter the product to search'
        onChange={(e)=>setsearchpro(e.target.value)}
        />
        <br></br>
        <br></br>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>cart</th>
          </tr>
        </thead>
        <tbody>
          {productincoming.filter((itm)=>itm.name.toLowerCase().includes(searchpro.toLowerCase()))
          .map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}
                <button onClick={()=>handleIncrement(product)}
                style={{width:'20px',marginLeft:"10px"}}>+</button>
              </td>
              <td>
              <button onClick={()=>addtocart(product)} style={{width:'90px'}}>Add To Cart </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{color:'white'}}> {totalprice}  </p>
    </div>
  );
};

export default Products;
