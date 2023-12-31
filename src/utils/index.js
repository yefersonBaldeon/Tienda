export const totalPrice = (products) => {
  let sum = 0;
  let suma = products.forEach((one) => (sum += one.price));
  return sum;
};
