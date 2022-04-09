// Problem: Add a new object to the list of cars and display them on the screen.

import { useState } from "react";

const AddItem = () => {
  const data = [
    {
      id: "c1",
      brand: "Toyota",
      make: "Corolla",
      model: "2007",
    },
    {
      id: "c2",
      brand: "Maruti Suzuki",
      make: "Omni",
      model: "2003",
    },
    {
      id: "c3",
      brand: "Hyundai",
      make: "Santro",
      model: "2005",
    },
  ];

  const [orgData, setOrgData] = useState(data);
  const [newData, setNewData] = useState({
    id: Math.random(),
    brand: "",
    make: "",
    model: "",
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter brand name"
        onChange={(e) =>
          setNewData((prev) => ({ ...prev, brand: e.target.value }))
        }
      ></input>
      <input
        type="text"
        placeholder="Enter make name"
        onChange={(e) =>
          setNewData((prev) => ({ ...prev, make: e.target.value }))
        }
      ></input>
      <input
        type="text"
        placeholder="Enter model year"
        onChange={(e) =>
          setNewData((prev) => ({ ...prev, model: e.target.value }))
        }
      ></input>
      <button onClick={() => setOrgData((prev) => [...prev, newData])}>
        Add new data
      </button>
      {orgData.map(({ id, brand, make, model }) => (
        <li key={id}>
          {brand} {make} {model}
        </li>
      ))}
    </div>
  );
};

export { AddItem };
