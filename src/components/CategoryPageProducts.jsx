import { v4 as uuid } from "uuid";
import Image from "next/image";
import PropTypes from 'prop-types';
import styles from "@/styles/CategoryPageProducts.module.css";
import LinkButton from "@/components/LinkButton";


const CategoryPageProducts = ({ products }) => {
  const productsJSX = products.map((product, index) => {
    let isNew;
    if (product.isNew) isNew = <p className={styles.newproduct}>New Product</p>;
    if (index === 0 || index === 2) {
      return (
        <div key={uuid()} className={styles.product}>
          <div className={styles.imgcontainerleft}>
            <Image
              src={product.preview}
              alt={product.name}
              className={styles.img}
            />
          </div>
          <div className={styles.contentcontainerright}>
            {isNew}
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            <LinkButton
              url={`/product/${product.slug}`}
              content="See Product"
            />
          </div>
        </div>
      );
    };
    return (
      <div key={uuid()} className={styles.product}>
        <div className={styles.imgcontainerright}>
          <Image
            src={product.preview}
            alt={product.name}
            className={styles.img}
          />
        </div>
        <div className={styles.contentcontainerleft}>
          {isNew}
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <LinkButton
            url={`/product/${product.slug}`}
            content="See Product"
          />
        </div>
      </div>
    );
  });

  return <div className={styles.productcontainer}>{productsJSX}</div>;
};

export default CategoryPageProducts;

CategoryPageProducts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};