import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemovehandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const placeOrderHandler = () => {
    <CartContext.Consumer>
      {cartCtx.items.splice(0, cartCtx.items.length)}
    </CartContext.Consumer>;
    alert("Thanks for ordering!, your order will be delivered soon💕");
    props.onHideCart();
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={placeOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
