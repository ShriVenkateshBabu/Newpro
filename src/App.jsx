import React from 'react';
import Header from "../src/Header&Footer/Header"
import Footer from "../src/Header&Footer/Footer"
import Home from './Components/Home'
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Newuser from './Components/Newuser';
import Products from './Components/products';
const App = () => {
  return (
    <div className='App' >
     <Header
      title="Shri Venkatesh Babu"
      />
     <Routes>
     <Route path="/" element ={<Login/>}/>
     <Route path="/Newuser" element ={<Newuser/>}/>
     <Route path="/Home" element ={<Home/>}/>
     <Route path="/Home/:productsname?" element ={<Products/>}/>
     </Routes>   
     <Footer/> 
      
    </div>
    
  )
}

export default App