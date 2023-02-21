import axios from "axios";
import { useState, useEffect } from "react";

const URL =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26c014cc-3f16-47dd-8438-921e5b1bd543/code_test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230221T133158Z&X-Amz-Expires=86400&X-Amz-Signature=25db0609fdf16b20277a67c39c0905e0f912d87346928457533d55823cbda3f3&X-Amz-SignedHeaders=host&x-id=GetObject";
export default function useApi() {
  const [conversations, setConversations] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    axios.get(URL).then((response) => {
      //sort conversations
      response.data.sort((a, b) => {
        const keyA = new Date(a.last_updated),
          keyB = new Date(b.last_updated);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      response.data.forEach((con) => {
        con.messages.sort((a, b) => {
          const keyA = new Date(a.last_updated),
            keyB = new Date(b.last_updated);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      });
      setConversations(response.data);
      setSelectedIndex(0);
    });
  }, []);
  const sendMessage = (message) => {
    const newconvers = [...conversations];
    const messageObj = {
      text: message,
      last_updated: new Date().toString(),
      id: Math.floor(100000 * Math.random()),
    };
    console.log(messageObj);
    newconvers[selectedIndex].messages.push(messageObj);
    setConversations(newconvers);
  };
  return { conversations, selectedIndex, setSelectedIndex, sendMessage };
}
