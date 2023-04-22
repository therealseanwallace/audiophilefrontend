import React from "react";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "@/assets/shared/desktop/icon-cart.svg";
import logo from "@/assets/shared/desktop/logo.svg";
import styles from "@/styles/Menu.module.css";
import BurgerMenu from "./BurgerMenu";
import cats from "@/data/catPictureLinks.js";
import { uuid } from "uuidv4";

const Menu = () => {
  const textLinks = cats.map((cat) => {
    return <Link key={uuid()} href={cat.slug} className={styles.navlink}>
      <p className={styles.textlink}>{cat.name}</p>
    </Link>
  });
  return (
    <nav className={styles.container}>
      <div className={styles.menuspacer} />
      <div className={styles.logocontainer}>
      <Image src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.burgercontainer}>
        <BurgerMenu />
      </div>
      <div className={styles.textlinks}>{textLinks}</div>
      <div className={styles.buttoncontainer}>
        <button className={styles.button}>
          <Image src={cartIcon} alt="cart" width={23} height={20} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
