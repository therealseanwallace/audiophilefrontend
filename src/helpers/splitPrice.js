import commaNumber from 'comma-number';

const splitPrice = (price) => {
  const format = commaNumber.bindWith(',', '.');
  return format(Number(price));
};

export default splitPrice;