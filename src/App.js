import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./Components/Login/Login";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [login, setLogin] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const loginhandler = () => {
    setLogin(true);
  };
  const logoutHandler = () => {
    setLogin(false);
  };

  return (
    <React.Fragment>
      {!login ? (
        <Login onLogin={loginhandler} />
      ) : (
        <CartProvider>
          <Header onShowCart={showCartHandler} onLogout={logoutHandler} />
          {showCart && <Cart onHideCart={hideCartHandler} />}
          <main>
            <Meals />
          </main>
        </CartProvider>
      )}
    </React.Fragment>
  );
}

export default App;
