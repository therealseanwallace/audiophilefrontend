import data from "@/data/data.js";
import ProductFactory from "@/helpers/ProductFactory.js";

const lookupItem = (slug) => {
  const itemLookup = data.find((item) => item.slug === slug);
  const itemToReturn = ProductFactory(
    itemLookup.id,
    itemLookup.price,
    itemLookup.name,
    itemLookup.image,
    1,
    slug
  );
  return itemToReturn;
};
export default lookupItem;
