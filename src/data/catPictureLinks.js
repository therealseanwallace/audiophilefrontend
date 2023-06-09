import headphones from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const cats = [
  {
    name: "home",
    slug: "/",
  },
  {
    name: "headphones",
    img: headphones,
    width: "124",
    height: "124",
    slug: "/category/headphones"
  },
  {
    name: "speakers",
    img: speakers,
    width: "124",
    height: "124",
    slug: "/category/speakers"
  },
  {
    name: "earphones",
    img: earphones,
    width: "148",
    height: "148",
    slug: "/category/earphones"
  },
];

export default cats;