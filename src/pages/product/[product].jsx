import products from "@/data/data.js";
import Menu from "@/components/Menu";
import CategoryPictureLinks from "@/components/CategoryPictureLinks";
import BottomCopySection from "@/components/BottomCopySection";
import styles from "@/styles/Product.module.css";
import ProductPageDetail from "@/components/ProductPageDetail";
import ProductGallery from "@/components/ProductGallery";
import MayAlsoLike from "@/components/MayAlsoLike";
import Footer from "@/components/Footer";
import GoBackLink from "@/components/GoBackLink";

const product = ({ data }) => (
  <>
    <header>
      <Menu page="nothome" />
      <GoBackLink />
    </header>
    <main>
      <ProductPageDetail data={data} />
      <ProductGallery images={data.gallery} name={data.name} />
      <MayAlsoLike others={data.others} />
      <CategoryPictureLinks />
      <BottomCopySection />
    </main>
    <Footer />
  </>
);

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
