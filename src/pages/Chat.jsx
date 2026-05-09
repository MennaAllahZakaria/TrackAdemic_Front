import MainLayout from "../layouts/MainLayout";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import RightSidebar from "../components/chat/RightSidebar";
import api from "../services/api";

import {
  useEffect,
  useRef,
  useState,
} from "react";

function Chat() {

  const [messages, setMessages] =
    useState([]);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const messagesEndRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  // LOCK BODY SCROLL
  useEffect(() => {

    if (sidebarOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [sidebarOpen]);

  // LOAD HISTORY
  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const res = await api.get(
          "/chat/history"
        );

        setMessages(
          res.data.data.reverse()
        );

      } catch (err) {

        console.error(err);

      }

    };

    fetchHistory();

  }, []);

  // SEND MESSAGE
  const handleSend = async (text) => {

    const newMessage = {
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    const typingMsg = {
      role: "assistant",
      content: "typing...",
      typing: true,
    };

    setMessages((prev) => [
      ...prev,
      newMessage,
      typingMsg,
    ]);

    try {

      const res = await api.post(
        "/chat/send",
        {
          message: text,
        }
      );

      setMessages((prev) => {

        const withoutTyping =
          prev.filter((m) => !m.typing);

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

      <div
        className="
          flex
          gap-6

          relative
        "
      >

        {/* CHAT SECTION */}
        <div
          className="
            w-full
            min-w-0
            flex-1
          "
        >

          <div
            className="
              w-full
              max-w-3xl

              mx-auto

              flex flex-col

              h-[78vh]
              sm:h-[80vh]
            "
          >

            {/* HEADER */}
            <div
              className="
                flex items-center
                justify-between

                gap-4
                mb-6
              "
            >

              {/* LEFT */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10 h-10

                    bg-purple-100

                    rounded-full

                    flex items-center justify-center
                  "
                >
                  ✨
                </div>

                <div>

                  <h3 className="font-semibold">
                    Chatting with Tracky
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gray-500
                    "
                  >
                    AI Academic Advisor •
                    Online
                  </p>

                </div>

              </div>

              {/* MOBILE SIDEBAR BUTTON */}
              <button
                onClick={() =>
                  setSidebarOpen(true)
                }
                className="
                        xl:hidden

                        w-10 h-10

                        rounded-xl

                        bg-white
                        shadow-sm

                        flex items-center justify-center

                        flex-shrink-0
                      "
              >
                <i className="ri-layout-right-line text-lg"></i>
              </button>

            </div>

            {/* MESSAGES */}
            <div
              className="
                flex-1

                overflow-y-auto

                space-y-4

                pr-1 sm:pr-2
              "
            >

              {messages.map((msg, i) => (
                <ChatMessage
                  key={i}
                  message={msg}
                />
              ))}

              <div ref={messagesEndRef} />

            </div>

            {/* INPUT */}
            <ChatInput onSend={handleSend} />

          </div>

        </div>

        {/* DESKTOP SIDEBAR */}
        <div
          className="
            hidden xl:block

            w-[320px]
            flex-shrink-0
          "
        >

          <div
            className="
              sticky top-24
            "
          >
            <RightSidebar />
          </div>

        </div>

        {/* MOBILE OVERLAY */}
        {sidebarOpen && (

          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              xl:hidden

              fixed inset-0

              bg-black/40
              backdrop-blur-[2px]

              z-40
            "
          />

        )}

        {/* MOBILE DRAWER */}
        <div
          className={`
            xl:hidden

            fixed top-0 right-0

            h-screen
            w-[85%]
            max-w-[340px]

            bg-gray-100

            p-4

            overflow-y-auto

            z-50

            transition-transform
            duration-300

            ${
              sidebarOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between

              mb-6
            "
          >

            <h3 className="font-semibold">
              Learning Assistant
            </h3>

            <button
              onClick={() =>
                setSidebarOpen(false)
              }
              className="
                w-10 h-10

                rounded-xl

                bg-white

                flex items-center justify-center
              "
            >
              <i className="ri-close-line text-xl"></i>
            </button>

          </div>

          <RightSidebar />

        </div>

      </div>

    </MainLayout>
  );
}

export default Chat;