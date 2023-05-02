/* eslint-disable arrow-body-style */
import styles from "@/styles/AddToCart.module.css";
import LinkButton from "@/components/LinkButton";

const AddToCart = (props) => {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.quantitycontainer}>
        <button type="button" className={styles.plusminus}>-</button>
        <p className={styles.price}>1</p>
        <button type="button" className={styles.plusminus}>+</button>
      </div>
      <LinkButton url="/" content="Add to cart" color="orange"/>
    </div>
  )
}

export default AddToCart