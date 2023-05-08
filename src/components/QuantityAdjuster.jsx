import PropTypes from 'prop-types';
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

QuantityAdjuster.propTypes = {
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};