import moment from "moment";
import MessageInput from "./MessageInput";
export default function ChatBox(props) {
  return (
    <div className="chat-box">
      <ul>
        {props.messages.map((message) => {
          const date = moment(message.last_updated);
          return (
            <li key={message.id}>
              <span>{date.format("dddd do MMMM yyyy HH:mm:ss")}</span>
              {message.text}
            </li>
          );
        })}
      </ul>
      <MessageInput sendMessage={props.sendMessage} />
    </div>
  );
}
