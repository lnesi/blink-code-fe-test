import { useState } from "react";
export default function MessageInput(props) {
  const [message, setMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={message}
        type="text"
        aria-label="input"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type="submit" aria-label="button">
        Send
      </button>
    </form>
  );
}
