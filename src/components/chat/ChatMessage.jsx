function ChatMessage({ message }) {
  const isUser = message.role === "user";

  const time = message.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>

        {/* AVATAR */}
        <div
          className={`
          w-8 h-8 rounded-full flex items-center justify-center text-sm
          ${isUser
            ? "bg-purple-500 text-white"
            : "bg-blue-200 text-blue-700"}
        `}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* MESSAGE + TIME */}
        <div className="flex flex-col">

          <div
            className={`
            max-w-[75%] px-5 py-4 rounded-2xl text-sm
            ${isUser
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-white text-gray-800 shadow-sm rounded-bl-none"}
          `}
          >
            {message.content}
          </div>

          {/* TIME */}
          <span
            className={`text-[11px] text-gray-400 mt-1 px-2 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {isUser ? "YOU • " : "TRACKY • "}
            {time}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ChatMessage;