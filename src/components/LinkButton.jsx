import Link from "next/link";
import styles from "@/styles/LinkButton.module.css";

const Button = ({ content, url }) => {
  return (
    <Link href={url}>
      <button className={styles.linkbutton}>
        <p>{content}</p>
      </button>
    </Link>
  );
};

export default Button;
