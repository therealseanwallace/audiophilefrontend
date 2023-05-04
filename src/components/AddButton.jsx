import PropTypes from "prop-types";
import styles from "@/styles/LinkButton.module.css";

const Button = ({ content, url, color, onClick }) => {
  if (color === "orange") {
    return (
      <button className={styles.linkbutton} type="button" onClick={onClick}>
        <p>{content}</p>
      </button>
    );
  }
  if (color === "black") {
    return (
      <button className={styles.black} type="button" onClick={onClick}>
        <p>{content}</p>
      </button>
    );
  }

  return (
    <button className={styles.transparent} type="button" onClick={onClick}>
      <p>{content}</p>
    </button>
  );
};

export default Button;

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: "orange",
};
