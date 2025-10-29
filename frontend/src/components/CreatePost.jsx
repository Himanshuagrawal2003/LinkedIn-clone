import { useState, useEffect } from "react";
import api from "../api/api";

export default function CreatePost({ onPost }) {
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await api.post("/posts", { text });
    setText("");
    onPost();
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-gray-900">
      {/* Top section */}
      <div className="flex items-start gap-3">
        {/* User Avatar */}
        <img
          src={user?.avatar || defaultAvatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Input Box */}
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            className="w-full resize-none border border-gray-300 rounded-full px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] placeholder-gray-500"
            rows="1"
            placeholder="Start a post..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={(e) => (e.target.rows = 1)}
            onBlur={(e) => {
              if (!text.trim()) e.target.rows = 1;
            }}
          ></textarea>

          {/* Divider */}
          <div className="border-t my-3"></div>

          {/* Bottom icons + Post button */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-gray-600 text-sm font-medium">
            {/* Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                📷 <span>Photo</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                🎥 <span>Video</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                📅 <span>Event</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                ✍️ <span>Write article</span>
              </div>
            </div>

            {/* Post button */}
            <button
              type="submit"
              className={`px-5 py-2 rounded-full font-semibold transition ${
                text.trim()
                  ? "bg-[#0A66C2] text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!text.trim()}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
