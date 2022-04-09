// Problem: Here is a list of items. Add a remove button for these items. With every click of the remove button, remove one item from the list.
// import { useState } from "react";
// Extension of question 02 - after removing an item, show a "undo remove" button. On clicking this button, add back the item that was removed and hide this "undo remove" button.

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
