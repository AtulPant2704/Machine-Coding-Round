const filterBySize = (size, products) => {
  if (size.length === 0) {
    return products;
  }
  const sizeFilteredProducts = products.filter((item) =>
    size.some((type) => type === item.size)
  );
  return sizeFilteredProducts;
};

export { filterBySize };
