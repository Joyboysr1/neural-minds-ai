"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../../../lib/firebase";

import {
  Brain,
  Mic,
  HeartPulse,
  Moon,
} from "lucide-react";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [religion, setReligion] = useState("");

  const handleAuth = async () => {
    try {
      if (isSignup) {
        if (Number(age) < 12) {
          alert("You must be 12+ to create an account.");
          return;
        }

        const methods = await fetchSignInMethodsForEmail(auth, email);

        if (methods.length > 0) {
          alert("Email already exists. Please login.");
          return;
        }

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        await sendEmailVerification(userCredential.user);

        alert(
          "Verification email sent. Please verify before logging in."
        );

        setIsSignup(false);
      } else {
        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

        if (!userCredential.user.emailVerified) {
          alert("Please verify your email first.");
          return;
        }

        window.location.href = "/";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-black to-purple-950/40"></div>

      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16">

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              NEURAL
            </span>
            <br />
            <span className="text-white">
              MINDS
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Your Mind
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Deserves Care.
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-14">
            Neural Minds is an AI-powered emotional wellness platform
            featuring MIRA AI — an intelligent companion designed to
            support, guide and understand users through every emotional journey.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition">
              <Mic className="text-cyan-400 mb-4" size={34} />

              <h3 className="text-xl font-bold mb-2">
                Voice AI
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Talk naturally with MIRA AI using voice and text conversations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-400/40 transition">
              <HeartPulse className="text-pink-400 mb-4" size={34} />

              <h3 className="text-xl font-bold mb-2">
                Emotion Tracking
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced emotional wellness monitoring powered by AI.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-purple-400/40 transition">
              <Moon className="text-purple-400 mb-4" size={34} />

              <h3 className="text-xl font-bold mb-2">
                Calm Experiences
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Guided breathing, sleep support and calming experiences.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16">

          <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                <Brain size={40} />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center mb-3">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h2>

            <p className="text-gray-400 text-center mb-10">
              Continue your emotional wellness journey with MIRA AI.
            </p>

            <div className="space-y-5">

              {isSignup && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />

                  <select
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    className="w-full bg-black text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                  >
                    <option value="" className="bg-black text-gray-400">
                      Select Religion
                    </option>

                    <option className="bg-black text-white">
                      Islam
                    </option>

                    <option className="bg-black text-white">
                      Hinduism
                    </option>

                    <option className="bg-black text-white">
                      Christianity
                    </option>

                    <option className="bg-black text-white">
                      Sikhism
                    </option>

                    <option className="bg-black text-white">
                      Buddhism
                    </option>

                    <option className="bg-black text-white">
                      Other
                    </option>
                  </select>
                </>
              )}

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={handleAuth}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg hover:scale-[1.02] transition"
              >
                {isSignup ? "Create Account" : "Login"}
              </button>

              <button
                onClick={() => setIsSignup(!isSignup)}
                className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                {isSignup
                  ? "Already have an account?"
                  : "Create New Account"}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}