const sortByPrice = (sortBy, products) => {
  switch (sortBy) {
    case "lowToHigh":
      return [...products].sort((a, b) => a.price - b.price);
    case "highToLow":
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export { sortByPrice };
