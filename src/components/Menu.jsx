import React from "react";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "@/assets/shared/desktop/icon-cart.svg";
import logo from "@/assets/shared/desktop/logo.svg";
import styles from "@/styles/Menu.module.css";
import BurgerMenu from "./BurgerMenu";
import MenuTextLinks from "./MenuTextLinks";

const Menu = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.menuspacer} />
      <Image src={logo} alt="logo" className={styles.logo}/>
      <BurgerMenu />
      <div className={styles.buttoncontainer}>
        <button className={styles.button}>
          <Image src={cartIcon} alt="cart" width={23} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
