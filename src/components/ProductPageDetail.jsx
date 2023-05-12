/* eslint-disable react/prop-types */
import Image from "next/image";
import { v4 as uuid } from "uuid";
import styles from "@/styles/ProductPageDetail.module.css";
import AddToCart from "./AddToCart";
import splitPrice from "@/helpers/splitPrice";

const ProductPageDetail = ({ data }) => {
  let newProduct;

  if (data.new)
    newProduct = <div className={styles.newproduct}>New Product</div>;

  const generateIntheBox = (includes) => {
    const inTheBox = includes.map((item) => (
      <div className={styles.intheboxitem} key={uuid()}>
        <p className={styles.intheboxquantity} key={uuid()}>{item.quantity}x</p>
        <p className={styles.description} key={uuid()}>{item.item}</p>
      </div>
    ));
    return inTheBox;
  };
  return (
    <>
      <section className={styles.mainsection}>
        <div className={styles.outerimagecontainer}>
          <div className={styles.mainimagecontainer}>
            <Image
              src={data.image.src}
              alt={data.slug}
              className={styles.mainimage}
              fill="true"
            />
          </div>
        </div>
        <div className={styles.productdetail}>
          {newProduct}
          <h2 className={styles.h2}>{data.name}</h2>
          <p className={styles.description}>{data.description}</p>
          <p className={styles.price}>$ {splitPrice(data.price)}</p>
          <AddToCart slug={data.slug} source="prodpage" />
        </div>
      </section>
      <section className={styles.featuressection}>
        <div className={styles.features}>
          <h2 className={styles.h2}>Features</h2>
          <p className={styles.description}>{data.featuresP1}</p>
          <p className={styles.description}>{data.featuresP2}</p>
        </div>
      </section>
      <section className={styles.inthebox}>
        <h2 className={styles.h2}>In the box</h2>
        <div className={styles.intheboxcontainer}>
          {generateIntheBox(data.includes)}
        </div>
      </section>
    </>
  );
};

export default ProductPageDetail;
