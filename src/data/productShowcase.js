import imgMobZx9 from "/public/assets/home/mobile/image-speaker-zx9.png";
import imgMobZx7 from "/public/assets/home/mobile/image-speaker-zx7.jpg";
import imgMobYx1 from "/public/assets/home/mobile/image-earphones-yx1.jpg";
import imgTabletZx9 from "/public/assets/home/tablet/image-speaker-zx9.png";
import imgTabletZx7 from "/public/assets/home/tablet/image-speaker-zx7.jpg";
import imgTabletYx1 from "/public/assets/home/tablet/image-earphones-yx1.jpg";
import imgDesktopZx9 from "/public/assets/home/desktop/image-speaker-zx9.png";
import imgDesktopZx7 from "/public/assets/home/desktop/image-speaker-zx7.jpg";
import imgDesktopYx1 from "/public/assets/home/desktop/image-earphones-yx1.jpg";

const products = [
  {
    name: "ZX9 SPEAKER",
    slug: "zx9-speaker",
    cat: "speakers",
    desktopImg: imgDesktopZx9,
    description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
  },
  {
    name: "ZX7 SPEAKER",
    slug: "zx7-speaker",
    cat: "speakers",
    mobImg: imgMobZx7,
    tabletImg: imgTabletZx7,
    desktopImg: imgDesktopZx7,
  },
  {
    name: "YX1 EARPHONES",
    slug: "yx1-earphones",
    cat: "earphones",
    mobImg: imgMobYx1,
    tabletImg: imgTabletYx1,
    desktopImg: imgDesktopYx1,
  },
]

export default products;