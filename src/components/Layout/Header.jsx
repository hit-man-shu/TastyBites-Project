import React from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>TastyBites</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
