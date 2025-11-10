import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      nav("/feed");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#F3F2EF] overflow-x-hidden">
      {/* --- Header --- */}
      <header className="w-full flex items-center justify-start px-8 py-6 fixed top-0 left-0 bg-[#F3F2EF] z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A66C2] select-none">
          Linked<span className="text-black">in</span>
        </h1>
      </header>

      {/* --- Main Section --- */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 pt-[120px] pb-[60px] text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 leading-snug">
          Welcome to your professional community
        </h2>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl border border-gray-200 p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]"
        >
          {/* Email */}
          <div className="mb-5 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email or phone number
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email or phone"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#0A66C2] focus:border-[#0A66C2] outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3 text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#0A66C2] focus:border-[#0A66C2] outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a
              href="#"
              className="text-[#0A66C2] text-sm font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0A66C2] text-white py-3 rounded-full font-semibold text-base hover:bg-[#004182] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Sign in
          </button>

          {/* Sign-up link */}
          <p className="text-center text-sm mt-6 text-gray-600">
            New to LinkedIn?{" "}
            <a
              href="/Signup.jsx"
              className="text-[#0A66C2] font-medium hover:underline"
            >
              Join now
            </a>
          </p>
        </form>
      </main>

      {/* --- Footer --- */}
      <footer className="w-full bg-white py-4 text-center text-xs text-gray-500 border-t mt-auto">
        <p className="flex flex-wrap justify-center gap-3 px-4">
          <span>LinkedIn © 2025</span>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
          <a href="#" className="hover:underline">
            User Agreement
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline">
            Brand Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
