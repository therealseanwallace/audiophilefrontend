import styles from "@/styles/Hero.module.css";
import LinkButton from "@/components/LinkButton";

const Hero = () => {
  return (
    <section className={styles.container}>
      <p className={styles.new}>NEW PRODUCT</p>
      <h1 className={styles.headline}>XX99 MARK II HEADPHONES</h1>
      <p className={styles.description}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <LinkButton content="SEE PRODUCT" url="/product/xx99-mark-two-headphones" className={styles.linkbutton} color="orange"/>
      <div className={styles.largespacer} />
    </section>
  )
}

export default Hero