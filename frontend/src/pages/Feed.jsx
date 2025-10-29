import { useState, useEffect } from "react";
import api from "../api/api";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import NavBar from "../components/NavBar";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const load = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error loading posts:", err);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    load();
  }, []);

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#F3F2EF] text-gray-900">
      <NavBar />

      <div className="flex flex-1 w-full justify-center pt-[80px] pb-6 px-4 sm:px-8">
        <div className="flex w-full max-w-[1600px] gap-6">
          
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-3 w-[25%] min-w-[280px] sticky top-[100px] h-fit self-start text-gray-900">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="h-16 bg-gray-300 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60')] bg-cover bg-center"></div>
              <div className="flex flex-col items-center -mt-10 pb-4">
                <img
                  src={user?.avatar || defaultAvatar}
                  alt="profile"
                  className="w-20 h-20 rounded-full border-2 border-white object-cover"
                />
                <h2 className="mt-2 font-semibold text-base text-gray-900">
                  {user?.name || "Guest User"}
                </h2>
                <p className="text-xs text-gray-700 px-2 text-center">
                  {user?.bio ||
                    "CSE'27 @CDGI | Frontend Developer | Tech Enthusiast"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {user?.location || "Indore, Madhya Pradesh"}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-3 text-sm text-gray-900">
              <div className="flex justify-between hover:bg-gray-100 p-1 rounded cursor-pointer">
                <span>Profile viewers</span>
                <span className="text-[#0A66C2] font-semibold">117</span>
              </div>
              <div className="flex justify-between hover:bg-gray-100 p-1 rounded cursor-pointer">
                <span>Post impressions</span>
                <span className="text-[#0A66C2] font-semibold">195</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-3 text-sm text-gray-900">
              <p className="text-gray-700">
                Grow your career or business with Premium
              </p>
              <div className="flex items-center gap-2 mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                <span className="text-[#0A66C2] font-semibold text-sm">
                  Try Premium for ₹0
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm border p-3 text-sm text-gray-900">
              <ul className="space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer transition">
                  🔖 Saved items
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer transition">
                  👥 Groups
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer transition">
                  📰 Newsletters
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer transition">
                  📅 Events
                </li>
              </ul>
            </div>
          </aside>

          {/* FEED CENTER */}
          <main className="flex-1 flex flex-col gap-4 w-full max-w-3xl mx-auto text-gray-900">
            <CreatePost onPost={load} />
            {posts.length === 0 ? (
              <p className="text-center text-gray-500 mt-6">No posts yet.</p>
            ) : (
              posts.map((p) => <PostCard key={p._id} post={p} />)
            )}
          </main>

          <aside className="hidden lg:flex flex-col bg-white rounded-lg shadow-sm border w-[25%] min-w-[280px] p-4 h-fit sticky top-[100px] self-start text-gray-900">
            <h3 className="font-semibold mb-3 text-gray-900">LinkedIn News</h3>
            <ul className="text-sm text-gray-800 space-y-2">
              <li>💼 Amazon cutting 14K corporate jobs</li>
              <li>🚀 Top startups in 5 Indian cities</li>
              <li>💳 Prepaid cards make a comeback</li>
              <li>🏠 Foreign realty funding dries up</li>
              <li>🧠 OpenAI wraps recapitalization plan</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
