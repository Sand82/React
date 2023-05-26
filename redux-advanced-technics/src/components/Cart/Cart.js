import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((x) => (
          <CartItem
            key={x.id}
            item={{
              id: x.id,
              title: x.name,
              quantity: x.quantity,
              total: x.totalPrice,
              price: x.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
