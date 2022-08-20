import React, { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ORDER FOOD</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button className={classes.logout} onClick={props.onLogout}>
          Logout
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
}

export default Header;
