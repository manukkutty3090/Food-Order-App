import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;
  const numberOfCartAdded = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [items]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartAdded}</span>
    </button>
  );
}

export default HeaderCartButton;
