const filterByPriceRange = (rangeFilter, products) => {
  const priceRangeFilteredItems = products.filter(
    (item) => item.price <= Number(rangeFilter)
  );
  return priceRangeFilteredItems;
};

export { filterByPriceRange };
