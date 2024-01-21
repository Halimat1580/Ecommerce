import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NavBar from "./Layouts/NavBar";
import SingleProduct from "./Pages/SingleProduct";

// const cartItemsFromLocalStorage =JSON.parse(localStorage.getItem('cart')) || []

function App() {
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  // useEffect(()=>{
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // },{cart}  )


  // let handleAddToCart = (product) => {
  //   const productSelected = cart.find(
  //     (singleCart) => singleCart.id === product.id
  //   );
  //   if (productSelected) {
  //     setCart(
  //       cart.map((oneItem) =>
  //         oneItem.id === productSelected.id
  //           ? {
  //               ...productSelected,
  //               quantity: productSelected.quantity + 1,
  //             }
  //           : oneItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

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
