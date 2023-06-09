import { useState } from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHeandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHeandler} />
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
