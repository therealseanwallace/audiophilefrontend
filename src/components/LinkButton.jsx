import Link from "next/link";
import styles from "@/styles/LinkButton.module.css";

const Button = ({ content, url, color }) => {
  if (color === "orange" || color === undefined) {
    return (
      <Link href={url}>
        <button className={styles.linkbutton}>
          <p>{content}</p>
        </button>
      </Link>
    );
  }
  if (color === "black") {
    return (
      <Link href={url}>
        <button className={styles.black}>
          <p>{content}</p>
        </button>
      </Link>
    );
  }


    return (
      <Link href={url}>
        <button className={styles.transparent}>
          <p>{content}</p>
        </button>
      </Link>
    )
  
};

export default Button;
