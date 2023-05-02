import Head from "next/head";
import products from "@/data/data.js";
import Menu from "@/components/Menu";
import CategoryPictureLinks from "@/components/CategoryPictureLinks";
import BottomCopySection from "@/components/BottomCopySection";
import styles from "@/styles/Product.module.css";
import ProductPageDetail from "@/components/ProductPageDetail";
import ProductGallery from "@/components/ProductGallery";
import MayAlsoLike from "@/components/MayAlsoLike";
import Footer from "@/components/Footer";

const product = ({ data }) => {
  console.log("data is", data);
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu page="nothome" />
      </header>
      <main>
        <ProductPageDetail data={data} />
        <ProductGallery images={data.gallery} name={data.name}/>
        <MayAlsoLike others={data.others}/>
        <CategoryPictureLinks />
        <BottomCopySection />
      </main>
      <Footer />
    </>
  );
};

export default product;

export async function getStaticProps({ params }) {
  let data;
  let returnValue;
  products.forEach((prod) => {
    if (!data) {
      if (prod.slug === params.product) {
        data = prod;
      }
    }
  });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((prod) => ({
    params: { product: prod.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
