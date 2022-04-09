import { useState } from "react";

// Problem: You have a list of items with price and quantity. Create two buttons for each and every element in the data list. One will increment the quantity of the particular item, and one will decrement the quantity. Show all details of the items on the page.
const QuantityController = () => {
  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      item: "jacket",
      price: 400,
      quantity: 1,
    },
    {
      id: 3,
      item: "hat",
      price: 50,
      quantity: 1,
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250,
      quantity: 1,
    },
    {
      id: 5,
      item: "gloves",
      price: 300,
      quantity: 1,
    },
  ];

  const [orgData, setOrgData] = useState(data);

  const quantityHandler = (id, type) => {
    const newData = orgData.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity:
              type === "increment"
                ? product.quantity + 1
                : product.quantity - 1,
          }
        : { ...product }
    );
    setOrgData(newData.filter((product) => product.quantity >= 1));
  };

  return (
    <div>
      {orgData.map(({ id, item, price, quantity }) => (
        <div key={id}>
          {item} ({price}$)
          <button onClick={() => quantityHandler(id, "increment")}>+</button>
          {quantity}
          <button onClick={() => quantityHandler(id, "decrement")}>-</button>
        </div>
      ))}
    </div>
  );
};

export { QuantityController };
