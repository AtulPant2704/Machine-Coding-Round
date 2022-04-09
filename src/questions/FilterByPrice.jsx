import { useState } from "react";

const FilterByPrice = () => {
  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100,
    },
    {
      id: 2,
      item: "jacket",
      price: 400,
    },
    {
      id: 3,
      item: "hat",
      price: 50,
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250,
    },
    {
      id: 5,
      item: "gloves",
      price: 300,
    },
  ];

  const [priceRange, setPriceRange] = useState({ lower: 0, upper: 1000 });

  const filterItems = (lower, upper) => {
    return data.filter(
      (product) =>
        Number(product.price) >= Number(lower) &&
        Number(product.price) <= Number(upper)
    );
  };

  const getFilteredItems = filterItems(priceRange.lower, priceRange.upper);

  return (
    <div>
      <div>
        <label>Lower limit:</label>
        <input
          type="number"
          value={priceRange.lower}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, lower: e.target.value }))
          }
        ></input>
      </div>
      <div>
        <label>Upper limit:</label>
        <input
          type="number"
          value={priceRange.upper}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, upper: e.target.value }))
          }
        ></input>
      </div>
      {getFilteredItems.map(({ id, item, price }) => (
        <li key={id}>
          {item} - {price}$
        </li>
      ))}
    </div>
  );
};

export { FilterByPrice };
