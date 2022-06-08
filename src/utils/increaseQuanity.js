const increaseQuanity = (productId, cart) => {
  const newCart = cart.map((product) =>
    product.id === productId ? { ...product, qty: product.qty + 1 } : product
  );
  return newCart;
};

export { increaseQuanity };
