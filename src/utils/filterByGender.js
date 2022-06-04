const filterByGender = (gender, products) => {
  if (gender === "") {
    return products;
  }
  const genderFilteredItems = products.filter((item) => item.gender === gender);
  return genderFilteredItems;
};

export { filterByGender };
