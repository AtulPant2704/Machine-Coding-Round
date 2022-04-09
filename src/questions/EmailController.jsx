// Problem:  Create a subscribe form with an email and subscribe button.
// On clicking subscribe, check if the email already exists in the given array.
// if it exists show a message that the email is already subscribed, else show that you are now subscribed.
import { useState } from "react";

const EmailController = () => {
  const data = [
    {
      id: 1,
      mail: "tanay@neog.camp",
    },
    {
      id: 2,
      mail: "tanvi@neog.camp",
    },
    {
      id: 3,
      mail: "akanksha@neog.camp",
    },
    {
      id: 4,
      mail: "parul@neog.camp",
    },
    {
      id: 5,
      mail: "kishan@neog.camp",
    },
  ];

  const [email, setEmail] = useState("");
  const [outputMsg, setOutputMsg] = useState("");

  const checkEmail = () => {
    data.some((item) =>
      item.mail === email
        ? setOutputMsg("Email already exists")
        : setOutputMsg("You are now subscribed")
    );
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button onClick={checkEmail}>Subscribe</button>
      {outputMsg ? <p>{outputMsg}</p> : null}
    </div>
  );
};

export { EmailController };
