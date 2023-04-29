import styles from "@/styles/BottomCopySection.module.css";

const BottomCopySection = () => (
    <section className={styles.section}>
      <div className={styles.imagecontainer} />
      <div className={styles.textcontainer}>
        <h2 className={styles.title}>Bringing you the <span>best</span> audio gear</h2>
        <p className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>

    </section>
  )

export default BottomCopySection