import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import CategoryPictureLinks from "@/components/CategoryPictureLinks";
import ProductShowcase from "@/components/ProductShowcase";
import BottomCopySection from "@/components/BottomCopySection";
import data from "@/data/data.json";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu page="home"/>
        <Hero />
      </header>
      <main className={styles.main}>
        <CategoryPictureLinks data={data}/>
        <ProductShowcase />
        <BottomCopySection />
      </main>
      <Footer />
    </>
  );
}