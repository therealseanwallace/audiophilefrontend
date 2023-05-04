const splitPrice = (price) => {
  const numberString = price.toString();
  const  { length } = numberString;
  let formattedNumber = '';

  switch (length) {
    case 1:
    case 2:
    case 3:
      formattedNumber = numberString;
      break;
    case 4:
    case 5:
    case 6:
      formattedNumber = `${numberString.slice(0, length - 3)},${numberString.slice(length - 3)}`;
      break;
    case 7:
    case 8:
    case 9:
      formattedNumber = `${numberString.slice(0, length - 6)},${numberString.slice(length - 6, length - 3)},${numberString.slice(length - 3)}`;
      break;
    case 10:
    case 11:
    case 12:
      formattedNumber = `${numberString.slice(0, length - 9)},${numberString.slice(length - 9, length - 6)},${numberString.slice(length - 6, length - 3)},${numberString.slice(length - 3)}`;
      break;
    default:
      formattedNumber = numberString;
      break;
  }

  return formattedNumber;
};

export default splitPrice;