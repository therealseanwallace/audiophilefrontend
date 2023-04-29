import Link from "next/link";
import PropTypes from 'prop-types';
import styles from "@/styles/LinkButton.module.css";

const Button = ({ content, url, color }) => {
  if (color === "orange") {
    return (
      <Link href={url}>
        <button className={styles.linkbutton} type="button">
          <p>{content}</p>
        </button>
      </Link>
    );
  }
  if (color === "black") {
    return (
      <Link href={url}>
        <button className={styles.black} type="button">
          <p>{content}</p>
        </button>
      </Link>
    );
  }


    return (
      <Link href={url}>
        <button className={styles.transparent} type="button">
          <p>{content}</p>
        </button>
      </Link>
    )
  
};

export default Button;

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string
};

Button.defaultProps = {
  color: "orange"
};