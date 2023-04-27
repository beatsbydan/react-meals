import React from "react";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState()
  const showCart = () => {
    setCartIsShown(true)
  }
  const hideCart = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown&&<Cart onHideCart = {hideCart}/>}
      <Header onShowCart = {showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    
  );
}

export default App;
