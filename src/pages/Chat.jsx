import MainLayout from "../layouts/MainLayout";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import RightSidebar from "../components/chat/RightSidebar";
import api from "../services/api";
import { useEffect, useRef ,useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  // scroll auto
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔥 load history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get("/chat/history");
        setMessages(res.data.data.reverse()); 
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, []);

  //  send message
  const handleSend = async (text) => {
    const newMessage = {
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    // typing placeholder
    const typingMsg = {
      role: "assistant",
      content: "typing...",
      typing: true,
    };

    setMessages((prev) => [...prev, newMessage, typingMsg]);

    try {
      const res = await api.post("/chat/send", {
        message: text,
      });
      setMessages((prev) => {
        const withoutTyping = prev.filter((m) => !m.typing);

        return [
          ...withoutTyping,
          {
            role: "assistant",
            content: res.data.message,
            data: res.data.data,
            createdAt: new Date(),
          },
        ];
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <div className="flex gap-6">
        <div className="max-w-3xl mx-auto flex flex-col h-[80vh]">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              ✨
            </div>
            <div>
              <h3 className="font-semibold">Chatting with Tracky</h3>
              <p className="text-xs text-gray-500">AI Academic Advisor • Online</p>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}

          </div>

          <div ref={messagesEndRef} />

          {/* INPUT */}
          <ChatInput onSend={handleSend} />

        </div>
          {/* RIGHT SIDEBAR */}
        <div className="w-[320px]">
          <RightSidebar />
        </div>
      </div>
    </MainLayout>
  );
}

export default Chat;