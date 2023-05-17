import { useState } from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHeandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <>
      <Header onShowCart={showCartHeandler} />
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
