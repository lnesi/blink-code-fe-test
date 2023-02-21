import Conversations from "./components/Conversations";
import ChatBox from "./components/ChatBox";
import useApi from "./hooks/useApi";
function App() {
  const { conversations, selectedIndex, setSelectedIndex, sendMessage } =
    useApi();
  if (conversations.length === 0) return <div>Loading</div>;

  return (
    <div className="App">
      <Conversations data={conversations} setSelectedIndex={setSelectedIndex} />
      <ChatBox
        sendMessage={sendMessage}
        messages={conversations[selectedIndex].messages}
      />
    </div>
  );
}

export default App;
