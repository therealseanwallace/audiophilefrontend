
import { useContext, useCallback, useEffect } from "react";
import { CartContext } from "@/context/Context";
import catPages from "@/data/catPages";
import Menu from "@/components/Menu";
import CategoryPictureLinks from "@/components/CategoryPictureLinks";
import BottomCopySection from "@/components/BottomCopySection";
import CategoryPageProducts from "@/components/CategoryPageProducts";
import styles from "@/styles/Category.module.css";
import Footer from "@/components/Footer";

const cat = ({ data }) => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const updateLastPageVisited = useCallback(() => {
    cartDispatch({
      type: "SET_LAST_PAGE_VISITED",
      payload: `/category/${data.slug}`,
    });
  }, [cartDispatch]);
  useEffect(() => {
    updateLastPageVisited();
  }, [updateLastPageVisited]);
  return (
    <>
      <header>
        <Menu page="nothome" />
        <h1 className={styles.h1}>{data.slug}</h1>
      </header>
      <main>
        <CategoryPageProducts products={data.products} slug={data.slug} />
        <CategoryPictureLinks />
        <BottomCopySection />
      </main>
      <Footer />
    </>
  );
};

export default cat;

export async function getStaticProps({ params }) {
  let data;
  catPages.forEach((category) => {
    if (category.slug === params.cat) {
      data = category;
    }
  });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = catPages.map((category) => ({
    params: { cat: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
