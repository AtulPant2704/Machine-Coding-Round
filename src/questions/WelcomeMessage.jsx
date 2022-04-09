// **Problem:**  Take the name from user input and display the appropriate message when clicked on "show welcome message"

// If the name is an odd number of characters display ***"Hello [name]"*** and if it's even then display ***"Hi [name]"***
import { useState } from "react";

const WelcomeMessage = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const showMsg = () => {
    name.length % 2 === 0 ? setMsg(`Hi ${name}`) : setMsg(`Hello ${name}`);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={showMsg}>Show Welcome Message</button>
      {msg ? <p>{msg}</p> : null}
    </div>
  );
};

export { WelcomeMessage };
