import styles from "@/styles/QuantityAdjuster.module.css";

const QuantityAdjuster = ({ decreaseQuantity, increaseQuantity, quantity, source }) => {
  if (source === "prodpage") {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.plusminus}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <p className={styles.price}>{quantity}</p>
        <button
          type="button"
          className={styles.plusminus}
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    );
  }
  return (
    <div className={styles.smallcontainer}>
        <button
          type="button"
          className={styles.plusminus}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <p className={styles.price}>{quantity}</p>
        <button
          type="button"
          className={styles.plusminus}
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    );
  
  
}

export default QuantityAdjuster;
