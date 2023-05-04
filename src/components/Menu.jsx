import { useState, useContext } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "/public/assets/shared/desktop/icon-cart.svg";
import logo from "/public/assets/shared/desktop/logo.svg";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { CartContext } from "@/context/CartContext";
import styles from "@/styles/Menu.module.css";
import BurgerMenu from "./BurgerMenu";
import cats from "@/data/catPictureLinks.js";
import Cart from "@/components/Cart";

const Menu = ({ page }) => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const textLinks = cats.map((cat) => (
    <Link key={uuid()} href={cat.slug} className={styles.navlink}>
      <p className={styles.textlink}>{cat.name}</p>
    </Link>
  ));

  if (page === "home") {
    return (
      <nav className={styles.containerlight}>
        <div className={styles.menuspacer} />
        <div className={styles.logocontainer}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.burgercontainer}>
          <BurgerMenu />
        </div>
        <div className={styles.textlinks}>{textLinks}</div>
        <div className={styles.buttoncontainer}>
          <button className={styles.button} type="button" onClick={toggleModal}>
            <Image src={cartIcon} alt="cart" width={23} height={20} />
          </button>
        </div>
        <Cart isOpen={modalIsOpen} toggleModal={toggleModal}/>
      </nav>
    );
  }
  return (
    <nav className={styles.containerdark}>
      <div className={styles.menuspacer} />
      <div className={styles.logocontainer}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.burgercontainer}>
        <BurgerMenu />
      </div>
      <div className={styles.textlinks}>{textLinks}</div>
      <div className={styles.buttoncontainer}>
        <button className={styles.button} type="button" onClick={toggleModal}>
          <Image src={cartIcon} alt="cart" width={23} height={20} />
        </button>
      </div>
      <Cart isOpen={modalIsOpen} toggleModal={toggleModal}/>
    </nav>
  );
};

export default Menu;

Menu.propTypes = {
  page: PropTypes.string.isRequired,
};
