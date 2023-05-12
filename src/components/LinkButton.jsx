import Link from "next/link";
import PropTypes from 'prop-types';
import styles from "@/styles/LinkButton.module.css";

const Button = ({ content, url, color, onclick }) => {
  if (color === "orange") {
    return (
      <Link href={url}>
        <button className={styles.linkbutton} type="button" onClick={onclick}>
          <p>{content}</p>
        </button>
      </Link>
    );
  }

  if (color === "orangefullwidth") {
    return (
      <Link href={url}>
        <button className={styles.orangefullwidth} type="button" onClick={onclick}>
          <p>{content}</p>
        </button>
      </Link>
    );
  }
  if (color === "black") {
    return (
      <Link href={url}>
        <button className={styles.black} type="button" onClick={onclick}>
          <p>{content}</p>
        </button>
      </Link>
    );
  }


    return (
      <Link href={url}>
        <button className={styles.transparent} type="button" onClick={onclick}>
          <p>{content}</p>
        </button>
      </Link>
    )
  
};

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  onclick: PropTypes.func
};

Button.defaultProps = {
  color: "orange"
};