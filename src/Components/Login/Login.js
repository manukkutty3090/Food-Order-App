import React from "react";
import classes from "./Login.module.css";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "manukkutty@live.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      props.onLogin();
    } else {
      alert("Wrong email or password combination");
      return;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  return (
    <div className={classes.App}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes["input-group"]}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="nome@email.com.br" />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" />
        </div>
        <button className={classes.primary}>ENTRAR</button>
      </form>
      <button className={classes.secondary} onClick={handleClick}>
        Register
      </button>
    </div>
  );
}

export default Login;
