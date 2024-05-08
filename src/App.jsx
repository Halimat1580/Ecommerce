import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NavBar from "./Layouts/NavBar";
import SingleProduct from "./Pages/SingleProduct";

// const cartItemsFromLocalStorage =JSON.parse(localStorage.getItem('cart')) || []

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar  /> 
        <Routes>
          <Route
            index
            element={
              <Home
                
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart/>  } />
          
   
          <Route
            path="/SingleProduct/:id"
            element={
              <SingleProduct
               
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
