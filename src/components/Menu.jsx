import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '@/assets/shared/desktop/icon-cart.svg';
import logo from '@/assets/shared/desktop/logo.svg';
import styles from '@/styles/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" />
      <div className={styles.menucontainer}>
        <Link className={styles.link} href="/">
          <p>Home</p>
        </Link>
        <Link className={styles.link} href="/category/headphones">
          <p>Headphones</p>
        </Link>
        <Link className={styles.link} href="/category/speakers">
          <p>Speakers</p>
        </Link>
        <Link className={styles.link} href="/category/earphones">
          <p>Earphones</p>
        </Link>
      </div>
      <button className={styles.button}>
        <Image src={cartIcon} alt="cart" width={20} height={20} />
      </button>
      <div className={styles.divider}></div>
    </div>
  )
}

export default Menu