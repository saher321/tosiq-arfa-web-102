
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, reset } = useForm()
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);
  
  const sendMessage = async (data) => {
    if (!data.msg) {
      alert("Please fill the field")
      return 
    }
    try {
      console.log(data.msg)
      reset()
      const response = await axios.post("http://127.0.0.1:8000/chat", data)
      console.log(response.data)
      // if (response.data.status == true) {
        setMessages(prev => prev + response.data.reply)
      // }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Chat Header */}
        <div className="flex items-center gap-3 bg-indigo-600 px-5 py-4 text-white">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
            🤖
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-indigo-600 bg-green-400" />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">FusionMeal Assistant</h2>
            <p className="text-sm text-indigo-100">
              Online · Ready to help
            </p>
          </div>

          <button
            type="button"
            aria-label="More options"
            className="rounded-full px-3 py-2 text-xl transition hover:bg-white/20"
          >
            ⋮
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-[420px] space-y-5 overflow-y-auto bg-gray-50 p-5">
          <p className="text-center text-xs text-gray-400">
            TODAY
          </p>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm">
                  🤖
                </div>
              )}

              <div
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "items-end"
                    : "items-start"
                } flex flex-col`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-indigo-600 text-white"
                      : "rounded-bl-sm border border-gray-100 bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>

                <span className="mt-1 px-1 text-[10px] text-gray-400">
                  {message.time}
                </span>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        

        {/* Message Input */}
        <form
          onSubmit={handleSubmit(sendMessage)}
          className="flex items-center gap-3 border-t border-gray-100 bg-white p-4"
        >
          <input
            { ...register("msg") }
            type="text"
            placeholder="Type your message..."
            aria-label="Type your message"
            className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />

          <button
            type="submit"
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>

        {/* Footer */}
        <div className="bg-white pb-3 text-center text-xs text-gray-400">
          Powered by US
        </div>
      </div>
    </div>
  );
};

export default App;
