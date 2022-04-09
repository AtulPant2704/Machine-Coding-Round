// You have a list of items. Each item has an id, a name, and a price. You have to create 2 inputs. One input will take the id, the other will take a price. Use a submit button, to update the price of the id which is provided in the input fields.

import { useState } from "react";

const UpdatePrice = () => {
  const data = [
    { id: 1, name: "shoes", price: 100 },
    { id: 2, name: "jacket", price: 400 },
    { id: 3, name: "hat", price: 50 },
    { id: 4, name: "sunglasses", price: 250 },
  ];

  const [orgData, setOrgData] = useState(data);
  const [changeItem, setChangeItem] = useState({
    name: "",
    price: "",
  });

  const updateHandler = () => {
    const newData = orgData.map((item) =>
      item.name === changeItem.name
        ? { ...item, price: changeItem.price }
        : { ...item }
    );
    setOrgData(newData);
  };

  return (
    <div>
      <label>Name:</label>
      <select
        value={changeItem.name}
        onChange={(e) =>
          setChangeItem((prev) => ({ ...prev, name: e.target.value }))
        }
      >
        {data.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
      {/* <input
        type="text"
        value={changeItem.name}
        onChange={(e) =>
          setChangeItem((prev) => ({ ...prev, name: e.target.value }))
        }
      ></input> */}
      <label>Price:</label>
      <input
        type="number"
        value={changeItem.price}
        onChange={(e) =>
          setChangeItem((prev) => ({ ...prev, price: e.target.value }))
        }
      ></input>
      <button onClick={updateHandler}>Submit</button>
      {orgData.map(({ id, name, price }) => (
        <li key={id}>
          {id} {name} ${price}
        </li>
      ))}
    </div>
  );
};

export { UpdatePrice };
