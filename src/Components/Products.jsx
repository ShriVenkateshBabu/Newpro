import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { datacontext } from '../DataContext/Dataprovider';

const Products = () => {
  const { productsname } = useParams();
  const[searchpro ,setsearchpro] = useState("")
  const incompro = productsname.toLowerCase()
  const [productincoming, setproductincoming] = useState([]);
  const [vegetables, setVegetables] = useState([
    { id: 1, name: "tomato", price: 20, quantity: "1kg" },
    { id: 2, name: "brinjal", price: 20, quantity: "1kg" },
    { id: 3, name: "cucumber", price: 20, quantity: "1kg" }
  ]);

  const [electronics, setElectronics] = useState([
    { id: 1, name: "apple", price: 100, quantity: "1kg" },
    { id: 2, name: "samsung", price: 100, quantity: "1kg" }
    
  ]);
  const [dress, setdress] = useState([
    { id: 1, name: "kurta", price: 100, quantity: "1kg" },
    { id: 2, name: "shirt", price: 100, quantity: "1kg" },
    { id: 2, name: "shirt2", price: 100, quantity: "1kg" }
  ]);
  const [shoe, setshoe] = useState([
    { id: 1, name: "nike", price: 100, quantity: "1kg" },
    { id: 2, name: "adidas", price: 100, quantity: "1kg" }
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
  }, [incompro]);


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
          </tr>
        </thead>
        <tbody>
          {productincoming.filter((itm)=>itm.name.toLowerCase().includes(searchpro.toLowerCase()))
          .map((veg, index) => (
            <tr key={index}>
              <td>{veg.id}</td>
              <td>{veg.name}</td>
              <td>{veg.price}</td>
              <td>{veg.quantity}
                <button onClick={handleincrement}
                style={{width:'20px',marginLeft:"10px"}}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
