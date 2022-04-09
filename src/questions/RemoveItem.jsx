import { useState } from "react";

const RemoveItem = () => {
  const data = [
    {
      id: 1,
      item: "JavaScript",
    },
    {
      id: 2,
      item: "Python",
    },
    {
      id: 3,
      item: "Scala",
    },
    {
      id: 4,
      item: "Solidity",
    },
    {
      id: 5,
      item: "C++",
    },
  ];
  const [items, setItems] = useState(data);
  const [removed, setRemoved] = useState("");

  const deleteHandler = () => {
    const prevData = [...items];
    setRemoved(prevData.pop());
    setItems(prevData);
  };

  const getRemoved = () => {
    setItems((prev) => [...prev, removed]);
    setRemoved("");
  };

  return (
    <div>
      {items.map((curr) => (
        <li>{curr.item}</li>
      ))}
      <button onClick={deleteHandler}>Delete</button>
      {removed ? <button onClick={getRemoved}>Undo Remove</button> : null}
    </div>
  );
};

export { RemoveItem };
