import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="mt-4 flex items-center bg-white rounded-full px-4 py-2 shadow-sm">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask Tracky about your learning plan..."
        className="flex-1 outline-none text-sm px-2"
      />

      <button
        onClick={handleSend}
        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition"
      >
        ➤
      </button>

    </div>
  );
}

export default ChatInput;