import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "16px",
    height: "15px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#fafafa",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    position: "absolute",
    height: "24px",
    width: "24px",
    left: "128px",
    top: "12px"
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    background: "#101010",
    top: "10px",
    left: "10px",
  },
  bmMenu: {
    position: "fixed",
    background: "#101010",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    top: "10px",
    left: "10px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
    color: "#fafafa",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const BurgerMenu = () => (
    <Menu styles={styles}>
      <Link href="/">Home</Link>
      <Link href="/category/headphones">Headphones</Link>
      <Link href="/category/speakers">Speakers</Link>
      <Link href="/category/earphones">Earphones</Link>
    </Menu>
  );

export default BurgerMenu;
