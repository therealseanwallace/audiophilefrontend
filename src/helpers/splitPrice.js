const splitPrice = (price) => {
  const priceRounded = price.toFixed(2);
  if (priceRounded === "0.00") return "0";
  
  const parts = priceRounded.split(".");
  const wholeNumber = parts[0];
  const decimal = parts[1];
  let withCommas = "";
  if (wholeNumber.length > 3) {
    withCommas =
    wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else withCommas = wholeNumber;
  if (decimal === "" || decimal === "00") return withCommas;
  const priceFormatted = `${withCommas}.${decimal}`;
  return priceFormatted;
};

export default splitPrice;
