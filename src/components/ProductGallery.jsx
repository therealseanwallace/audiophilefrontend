/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import Image from "next/image";
import styles from "@/styles/ProductGallery.module.css";

const ProductGallery = ({ images, name }) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.image0}>
        <Image
          src={images[0].src}
          alt={name}
          fill="true"
          className={styles.image}
        />
      </div>
      <div className={styles.image1}>
        <Image
          src={images[1].src}
          alt={name}
          fill="true"
          className={styles.image}
        />
      </div>

      <div className={styles.image2}>
        <Image
          src={images[2].src}
          alt={name}
          fill="true"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default ProductGallery;
