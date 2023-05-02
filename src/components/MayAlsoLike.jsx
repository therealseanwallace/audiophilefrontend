/* eslint-disable react/prop-types */
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/MayAlsoLike.module.css";
import LinkButton from "@/components/LinkButton";

const MayAlsoLike = ({ others }) => {
  const othersGallery = others.map((item) => (
      <div className={styles.item} key={item.slug}>
        <div className={styles.outerimagecontainer}>
          <div className={styles.imagecontainer}>
            <Image
              src={item.image.src}
              alt={item.name}
              fill="true"
              className={styles.image}
            />
          </div>
        </div>
        <h2 className={styles.h2}>{item.name}</h2>
        <LinkButton url={`/product/${item.slug}`} content="See Product" />
      </div>
    ));
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>You may also like</h2>
      <div className={styles.gallery}>{othersGallery}</div>
    </section>
  );
};

export default MayAlsoLike;
