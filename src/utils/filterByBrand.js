const filterByBrand = (brand, products) => {
  if (brand.length === 0) {
    return products;
  }
  const brandFilteredProducts = products.filter((item) =>
    brand.some((type) => type === item.brand)
  );
  return brandFilteredProducts;
};

export { filterByBrand };
