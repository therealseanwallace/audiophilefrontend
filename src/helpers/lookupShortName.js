const shortNames = {
  "yx1-earphones": "YX1",
  "xx59-headphones": "XX59",
  "xx99-mark-one-headphones": "XX99 Mk I",
  "xx99-mark-two-headphones": "XX99 Mk II",
  "zx7-speaker": "ZX7",
  "zx9-speaker": "ZX9",
};


const lookupShortName = (slug) => shortNames[slug];

export default lookupShortName;