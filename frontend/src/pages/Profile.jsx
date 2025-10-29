import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPen } from "react-icons/fa";
import NavBar from "../components/NavBar";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user)
    return (
      <div className="h-screen flex justify-center items-center text-gray-600">
        Loading profile...
      </div>
    );

  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#F3F2EF] text-gray-900">
      <NavBar />

      <main className="flex flex-1 w-full justify-center pt-[80px] pb-10 px-4 sm:px-8">
        <section className="w-full lg:w-[55%] space-y-8">

          {/* ================= Profile Header ================= */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden relative">

            {/* Cover Image */}
            <div className="relative h-48 sm:h-60 bg-gray-100">
              <img
                src={user.coverImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=400&amp;q=60"}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all duration-200">
                <FaPen className="text-gray-600 text-sm" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col sm:flex-row px-8 pb-8 gap-5 relative">
              {/* Profile Image */}
              <div className="relative -top-16 sm:-top-20">
                <img
                  src={
                    user.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="Profile"
                  className="w-36 h-36 rounded-full border-4 border-white shadow-md object-cover bg-white"
                />
              </div>

              {/* Text Info */}
              <div className="sm:mt-5 mt-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {user.name || "User Name"}
                  </h1>
                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    He/Him
                  </span>
                </div>

                <p className="text-[15px] text-gray-700 mt-1 leading-snug">
                  {user.headline ||
                    "Frontend Developer | MERN Stack | Software Engineer"}
                </p>

                {/* Location + Contact Info */}
                <div className="flex items-center flex-wrap gap-2 mt-3 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-gray-500 text-base" />
                  <span>{user.location || "Indore, Madhya Pradesh, India"}</span>
                  <span className="text-gray-400">•</span>
                  <a
                    href="#"
                    className="text-[#0A66C2] font-medium hover:underline transition"
                  >
                    Contact info
                  </a>
                </div>

                {/* Connections */}
                <a
                  href="#"
                  className="text-[#0A66C2] font-medium text-sm hover:underline mt-2 inline-block"
                >
                  500+ connections
                </a>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="bg-[#0A66C2] text-white px-5 py-2 rounded-full font-medium hover:bg-[#004182] transition">
                    Open to
                  </button>
                  <button className="border border-gray-400 px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition">
                    Add profile section
                  </button>
                  <button className="border border-gray-400 px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition">
                    Enhance profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= About Section ================= */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FaPen className="text-gray-500 text-sm" /> About
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              {user.bio ||
                "I am a passionate software developer focused on building scalable, responsive, and user-friendly web applications using the MERN stack."}
            </p>
          </div>

          {/* ================= Analytics Section ================= */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Analytics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-gray-700 text-sm">
              {[
                { value: 117, label: "Profile Views" },
                { value: 199, label: "Post Impressions" },
                { value: 31, label: "Search Appearances" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-5 rounded-lg border hover:bg-gray-100 transition flex flex-col items-center justify-center text-center"
                >
                  <span className="text-xl font-semibold text-gray-900">
                    {item.value}
                  </span>
                  <span className="text-sm mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Right Sidebar ================= */}
        <aside className="hidden lg:block w-[28%] space-y-6">
          {/* Profile Language + URL */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              Profile Language
            </h3>
            <p className="text-sm text-gray-600 mb-5">English</p>

            <h3 className="font-semibold text-gray-900 mb-2">
              Public Profile & URL
            </h3>
            <p className="text-sm text-gray-600 break-all">
              www.linkedin.com/in/
              {user.name?.toLowerCase().replace(/\s+/g, "-") || "user-profile"}
            </p>
          </div>

          {/* Who Viewed Your Profile */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="font-semibold text-gray-900 mb-4">
              Who Viewed Your Profile
            </h3>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-5 last:mb-0"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                    alt="viewer"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <p className="text-sm text-gray-800 font-medium">
                      Someone in your network
                    </p>
                    <p className="text-xs text-gray-500">
                      Viewed your profile recently
                    </p>
                  </div>
                </div>
                <button className="text-[#0A66C2] text-sm font-medium hover:underline">
                  View
                </button>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
