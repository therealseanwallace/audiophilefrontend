import styles from "@/styles/CategoryPageProducts.module.css";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

const CategoryPageProducts = ({ products, slug }) => {
  const productsJSX = products.map((product) => {
    if (product.isNew) {
      return (
        <div key={uuid()} className={styles.product}>
          <div className={styles.imgcontainer}>
            <Image
              src={product.preview}
              alt={product.name}
              className={styles.img}
            />
          </div>
          <div className={styles.contentcontainer}>
            <p className={styles.newproduct}>New Product</p>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            <LinkButton
              url={`/product/${product.slug}`}
              content="See Product"
            />
          </div>
        </div>
      );
    }
    return (
      <div key={uuid()} className={styles.product}>
        <div className={styles.imgcontainer}>
          <Image
            src={product.preview}
            alt={product.name}
            className={styles.img}
          />
        </div>
        <div className={styles.contentcontainer}>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <LinkButton url={`/product/${product.slug}`} content="See Product" />
        </div>
      </div>
    );
  });

  return <div className={styles.productcontainer}>{productsJSX}</div>;
};

export default CategoryPageProducts;
