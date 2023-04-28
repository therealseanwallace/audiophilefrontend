import xxMkIPreviewDesktop from "/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview-desktop.jpg";
import xxMkIIPreviewDesktop from "/public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview-desktop.jpg";
import xx59PreviewDesktop from "/public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9PreviewMobile from "/public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9PreviewTablet from "/public/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9PreviewDesktop from "/public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7PreviewMobile from "/public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import zx7PreviewTablet from "/public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7PreviewDesktop from "/public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import yx1PreviewMobile from "/public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1PreviewTablet from "/public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1PreviewDesktop from "/public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";


const catPages = [
  {
    slug: "headphones",
    products: [
      {
        name: "XX99 Mark II Headphones",
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        isNew: true,
        preview: xxMkIIPreviewDesktop,
        slug: "xx99-mark-two-headphones",
      },
      {
        name: "XX99 Mark I Headphones",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        isNew: false,
        preview: xxMkIPreviewDesktop,
        slug: "xx99-mark-one-headphones",
      },
      {
        name: "XX59 Headphones",
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        isNew: false,
        preview: xx59PreviewDesktop,
        slug: "xx59-headphones",

      },
    ],
  },
  {
    slug: "speakers",
    products: [
      {
        name: "ZX9 Speaker",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        isNew: true,
        preview: zx9PreviewDesktop,
        slug: "zx9-speaker",
      },
      {
        name: "ZX7 Speaker",
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        isNew: false,
        preview: zx7PreviewDesktop,
        slug: "zx7-speaker",

      },
    ],
  },
  {
    slug: "earphones",
    products: [
      {
        name: "YX1 Wireless Earphones",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        isNew: true,
        slug: "yx1-earphones",

      },
    ],
  },
];

export default catPages;
