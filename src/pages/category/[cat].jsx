import catPages from "@/data/catPages";
import Head from "next/head";
import Menu from "@/components/Menu";
import CategoryPictureLinks from "@/components/CategoryPictureLinks";
import BottomCopySection from "@/components/BottomCopySection";
import CategoryPageProducts from "@/components/CategoryPageProducts";
import styles from "@/styles/Category.module.css";
import Footer from "@/components/Footer";

const cat = ( { data } ) => {
  console.log(data);
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
        <h1 className={styles.h1}>{data.slug}</h1>
      </header>
      <main>
        <CategoryPageProducts products={data.products} slug={data.slug} />
        <CategoryPictureLinks />
        <BottomCopySection />
      </main>
      <Footer />

    </>
  )
}

export default cat;


export async function getStaticProps({ query, params }) {
  let data;
  catPages.forEach((cat) => {
    if (cat.slug === params.cat) {
      data = cat;
    }
  });
  return {
    props: {
      data
    },
  }
}

export async function getStaticPaths() {
  const paths = catPages.map((cat) => {
    return {
      params: { cat: cat.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}