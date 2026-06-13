"use client";

import { useState } from "react";
import {
  Brain,
  HeartPulse,
  Moon,
  Mic,
  Send,
} from "lucide-react";

export default function Home() {
  const [religion, setReligion] = useState("");
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getGreeting = () => {
    if (religion === "Muslim")
      return "Assalamu Alaikum 🌙 I am MIRA AI. How are you feeling today?";

    if (religion === "Hindu")
      return "Namaste 🙏 I am MIRA AI. How are you feeling today?";

    if (religion === "Christian")
      return "God bless you ✨ I am MIRA AI. How are you feeling today?";

    if (religion === "Sikh")
      return "Sat Sri Akal ✨ I am MIRA AI. How are you feeling today?";

    if (religion === "Buddhist")
      return "Peace and mindfulness ☸️ I am MIRA AI. How are you feeling today?";

    if (religion === "Jewish")
      return "Shalom ✨ I am MIRA AI. How are you feeling today?";

    return "Hello 👋 I am MIRA AI. How are you feeling today?";
  };

  const handleStart = () => {
    if (!religion) return;

    setStarted(true);

    setMessages([
      {
        sender: "ai",
        text: getGreeting(),
      },
    ]);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    const aiMessage = {
      sender: "ai",
      text: "I understand how you feel. Remember that healing takes time and you are never alone 💜",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px]" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          NeuralMinds
        </h1>

        <button className="px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Get Started
        </button>
      </nav>

      {/* Religion Selection Screen */}
      {!started && (
        <div className="flex flex-col items-center justify-center px-6 text-center mt-10 relative z-10">

          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.6)] mb-10">
            <Brain size={70} />
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MIRA AI
            </span>
          </h1>

          <p className="text-gray-300 text-xl max-w-2xl mb-10">
            Select your religion so MIRA AI can communicate more respectfully and personally.
          </p>

          <select
  value={religion}
  onChange={(e) => setReligion(e.target.value)}
  className="bg-[#161616] border border-white/20 px-6 py-4 rounded-2xl mb-8 w-full max-w-md outline-none text-white text-lg appearance-none"
>

  <option value="" className="bg-black text-white">
    Select Religion
  </option>

  <option value="Muslim" className="bg-black text-white">
    Islam
  </option>

  <option value="Hindu" className="bg-black text-white">
    Hinduism
  </option>

  <option value="Christian" className="bg-black text-white">
    Christianity
  </option>

  <option value="Sikh" className="bg-black text-white">
    Sikhism
  </option>

  <option value="Buddhist" className="bg-black text-white">
    Buddhism
  </option>

  <option value="Jain" className="bg-black text-white">
    Jainism
  </option>

  <option value="Jewish" className="bg-black text-white">
    Judaism
  </option>

  <option value="Other" className="bg-black text-white">
    Other
  </option>

</select>

          <button
            onClick={handleStart}
            className="px-10 py-4 rounded-full bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition"
          >
            Continue
          </button>
        </div>
      )}

      {/* Chat Screen */}
      {started && (
        <div className="flex flex-col items-center px-6 pb-20 relative z-10">

          <div className="w-36 h-36 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.6)] mt-8 mb-10">
            <Brain size={60} />
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight">
            Talk With{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MIRA AI
            </span>
          </h1>

          <p className="text-gray-300 text-xl text-center max-w-3xl mt-6 mb-12">
            Your intelligent emotional wellness companion designed to support,
            guide, and understand you through every step of your journey.
          </p>

          {/* Chat Box */}
          <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">

              {messages.map((msg, index) => (
                <div
  key={index}
  className={`px-5 py-4 rounded-2xl text-lg leading-relaxed w-fit max-w-[75%]
  ${
    msg.sender === "user"
      ? "bg-cyan-500 text-black ml-auto"
      : "bg-purple-900/50 border border-purple-500/20"
  }`}
>
                  {msg.text}
                </div>
              ))}

            </div>

            {/* Input */}
            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Share your thoughts..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none text-lg"
              />

              <button
                onClick={sendMessage}
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 rounded-2xl transition"
              >
                <Send />
              </button>

            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <Mic className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">AI Chat Support</h3>
              <p className="text-gray-400">
                Speak with MIRA AI anytime and receive emotional support instantly.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <HeartPulse className="text-pink-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Mental Health Tracking</h3>
              <p className="text-gray-400">
                Track your emotional well-being and mood progress daily.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <Moon className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Calming Experiences</h3>
              <p className="text-gray-400">
                Guided breathing exercises and peaceful calming sessions.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}