import Image from "next/image";
import styles from "@/styles/CategoryPictureLinks.module.css";
import cats from "../data/catPictureLinks.js";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import arrowRight from "/public/assets/shared/desktop/icon-arrow-right.svg";

const CategoryPictureLinks = () => {
  return (
    <section className={styles.section}>
      {cats.map((cat) => {
        return (
          <Link key={uuid()} href={cat.slug} className={styles.link}>
            <Image
              src={cat.img}
              alt={cat.name}
              className={styles.img}
            />
            <p className={styles.name}>{cat.name}</p>
            <div className={styles.shopcontainer}>
              <p className={styles.shop}>SHOP</p>
              <Image
                src={arrowRight}
                alt="arrow right"
                width={10}
                height={10}
                className={styles.arrow}
              />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryPictureLinks;
