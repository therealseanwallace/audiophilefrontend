/* eslint-disable arrow-body-style */
import { useContext, useState } from "react";
import styles from "@/styles/AddToCart.module.css";
import Button from "@/components/AddButton";
import { CartContext } from "@/context/Context";
import lookupItem from "@/helpers/lookupItem.js";
import QuantityAdjuster from "./QuantityAdjuster";

const AddToCart = ({ slug, source }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const { cartState, cartDispatch } = useContext(CartContext);
  const item = lookupItem(slug);

  const increaseQuantity = () => {
    setQuantityToAdd(quantityToAdd + 1);
    console.log('quantityToAdd', quantityToAdd);
  };

  const decreaseQuantity = () => {
    if (quantityToAdd > 0) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
      quantity: quantityToAdd,
    });
  };
  return (
    <div className={styles.outercontainer}>
      <QuantityAdjuster
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        quantity={quantityToAdd}
        source={source}
      />
      <Button content="Add to cart" color="orange" onClick={addToCart} />
    </div>
  );
};

export default AddToCart;
