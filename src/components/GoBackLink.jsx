import Link from "next/link";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "@/context/Context";
import styles from "@/styles/GoBackLink.module.css";

const GoBackLink = ({ color }) => {
  const { cartState } = useContext(CartContext);
  if (color === "grey") {
    return (
      <div className={styles.container}>
        <Link href={cartState.lastPageVisited} className={styles.link}>
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.containergrey}>
      <Link href={cartState.lastPageVisited} className={styles.linkorange}>Go Back</Link>
      
    </div>
  );
};

export default GoBackLink;

GoBackLink.propTypes = {
  color: PropTypes.string
};