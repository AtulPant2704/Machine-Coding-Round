const getCartSummary = (cart) => {
  const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = cart
    .reduce((acc, curr) => {
      const currPrice = curr.price * curr.qty;
      return acc + currPrice;
    }, 0)
    .toFixed(2);
  const totalDiscount = cart
    .reduce((acc, curr) => {
      const discount = curr.price * (curr.discount * 0.01);
      const discountedPrice = discount * curr.qty;
      return acc + discountedPrice;
    }, 0)
    .toFixed(2);
  const totalAmountPaid = (totalPrice - totalDiscount).toFixed(2);

  return { totalItems, totalPrice, totalDiscount, totalAmountPaid };
};

export { getCartSummary };
