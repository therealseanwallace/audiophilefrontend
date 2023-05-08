import { useContext } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import PropTypes from 'prop-types';
import LinkButton from "@/components/LinkButton";
import { CartContext } from "@/context/Context";
import styles from "@/styles/Cart.module.css";
import splitPrice from "@/helpers/splitPrice.js";
import QuantityAdjuster from "./QuantityAdjuster";
import lookupItem from "@/helpers/lookupItem";
import lookupShortName from "@/helpers/lookupShortName";


const Cart = ({ isOpen, toggleModal }) => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const clearCart = (item) => {
    cartDispatch({ type: "CLEAR_CART" });
  };

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "#00000080" },
        content: {
          width: "327px",
          margin: "auto",
          marginTop: "100px",
          inset: "20px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "1000px",
        },
      }}
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={styles.modal}
    >
      <div className={styles.topcontainer}>
        <h2 className={styles.h2}>Cart ({cartState.cart.length})</h2>
        <button onClick={clearCart} type="button" className={styles.clearall}>
          <p>Remove all</p>
        </button>
      </div>
      <div className={styles.itemcontainer}>
        {cartState.cart.map((product, index) => {
          const item = lookupItem(product.slug);

          const addItemsToCart = () => {
            cartDispatch({ type: "ADD_TO_CART", payload: item });
          };

          const removeItemsFromCart = (prod) => {
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
          };

          return (
            <div key={uuid()} className={styles.item}>
              <div className={styles.imagecontainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>

              <div className={styles.namepricecontainer}>
                <p className={styles.name}>{lookupShortName(product.slug)}</p>
                <p className={styles.price}>$ {splitPrice(product.price)}</p>
              </div>
              <div className={styles.adjustercontainer}>
                <QuantityAdjuster
                  quantity={cartState.cart[index].quantity}
                  decreaseQuantity={removeItemsFromCart}
                  increaseQuantity={addItemsToCart}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.totalcontainer}>
        <p className={styles.totallabel}>Total</p>
        <p className={styles.total}>$ {splitPrice(cartState.total)}</p>
      </div>
      <LinkButton url="/checkout" content="Checkout" color="orangefullwidth" />
    </Modal>
  );
};

export default Cart;

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};