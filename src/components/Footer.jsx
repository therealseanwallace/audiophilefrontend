import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import cats from "@/data/catPictureLinks.js";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import ghLogo from "/public/assets/shared/desktop/github-mark.png";
import linkedInLogo from "/public/assets/shared/desktop/LI-In-Bug.png";

const Footer = () => {
  const textLinks = cats.map((cat) => (
      <Link key={uuid()} href={cat.slug} className={styles.navlink}>
        <p className={styles.textlink}>{cat.name}</p>
      </Link>
    ));
  return (
    <footer className={styles.footer}>
      <div className={styles.spacer} />
      <Image
        src="/assets/shared/desktop/logo.svg"
        alt="logo"
        width={143}
        height={25}
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <Link key={uuid()} href="#home" className={styles.navlink}>
          <p className={styles.textlink}>Home</p>
        </Link>
        {textLinks}
      </nav>
      <p className={styles.footercopy}>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </p>
      <p className={styles.copyright}>
        Design Copyright Frontend Mentor 2021.
        <br /> All Rights Reserved.
        <br />
        Developed by Sean Patrick Wallace
      </p>
     
      <br />
      <div className={styles.linkcontainer}>
        <Link
          href="https://github.com/therealseanwallace/audiophilefrontend"
          className={styles.githublink}
        >
          <Image src={ghLogo} alt="github" width={36} height={36} />
        </Link>
        <Link
          href="https://github.com/therealseanwallace/audiophilefrontend"
          className={styles.githublink}
        >
          <Image src={linkedInLogo} alt="github" width={38} height={36} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
