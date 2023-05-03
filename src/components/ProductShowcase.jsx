import Image from "next/image";
import data from "@/data/productShowcase.js";
import styles from "@/styles/ProductShowcase.module.css";
import LinkButton from "@/components/LinkButton.jsx";

const ProductShowcase = () => {
  const firstURL = `/product/${data[0].slug}`;
  const secondURL = `product/${data[1].slug}`;
  const thirdurl = `product/${data[2].slug}`;
  return (
    <section className={styles.container}>
      <div className={styles.section1}>
        <Image
          className={styles.zx9img}
          src={data[0].desktopImg}
          alt={data[0].name}
        />
        <div className={styles.infodiv}>
          <h2 className={styles.name}>{data[0].name}</h2>
          <p className={styles.description}>{data[0].description}</p>
          <LinkButton content="SEE PRODUCT" url={firstURL} color="black" />
        </div>
        <div className={styles.lowerspacer} />
      </div>

      <div className={styles.section2}>
        <div className={styles.section2inner}>
          <h2>{data[1].name}</h2>
          <LinkButton
            content="SEE PRODUCT"
            url={secondURL}
            color="transparent"
          />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.imgcontainer} />
        <div className={styles.section3content}>
          <h2>{data[2].name}</h2>
          <LinkButton
            content="SEE PRODUCT"
            url={thirdurl}
            color="transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
