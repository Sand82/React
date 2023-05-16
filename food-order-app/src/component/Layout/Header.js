import React from "react";

import classes from "./Headr.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <button>Card</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delucious food!" />
      </div>
    </>
  );
};

export default Header;
