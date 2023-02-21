export default function Conversations(props) {
  return (
    <ul className="conversations">
      {props.data.map((conv, index) => {
        return (
          <li key={conv.id} onClick={() => props.setSelectedIndex(index)}>
            {conv.name}
          </li>
        );
      })}
    </ul>
  );
}
