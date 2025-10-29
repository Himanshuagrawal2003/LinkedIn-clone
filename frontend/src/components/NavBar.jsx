import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaTh,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);


  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-6 py-2">

        <div className="flex items-center gap-3">

          <div
            onClick={() => navigate("/feed")}
            className="flex items-center justify-center bg-[#0A66C2] text-white text-2xl font-bold w-8 h-8 rounded-sm cursor-pointer"
          >
            in
          </div>

          {/* Search bar */}
          <div className="hidden sm:flex items-center bg-[#EEF3F8] rounded-full px-3 py-2 w-[280px] lg:w-[350px]">
            <FiSearch className="text-gray-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Center Icons */}
        <nav className="flex items-center gap-6 text-gray-600 text-sm">
          <div
            onClick={() => navigate("/feed")}
            className="flex flex-col items-center cursor-pointer text-[#0A66C2]"
          >
            <FaHome className="text-xl" />
            <span className="hidden sm:block text-xs mt-1 font-semibold">
              Home
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <FaUserFriends className="text-xl" />
            <span className="hidden sm:block text-xs mt-1">My Network</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <FaBriefcase className="text-xl" />
            <span className="hidden sm:block text-xs mt-1">Jobs</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition relative">
            <FaCommentDots className="text-xl" />
            <span className="hidden sm:block text-xs mt-1">Messaging</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition relative">
            <FaBell className="text-xl" />
            <span className="hidden sm:block text-xs mt-1">Notifications</span>
          </div>

          {/* Profile Icon */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img
              src={user?.avatar || defaultAvatar}
              alt="profile"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 object-cover"
            />
            <span className="hidden sm:block text-xs mt-1">
              {user?.name ? user.name.split(" ")[0] : "Me"} ▼
            </span>
          </div>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <FaTh className="text-xl" />
            <span className="hidden sm:block text-xs mt-1">For Business ▼</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <div className="w-6 h-6 bg-yellow-400 rounded-sm mb-1"></div>
            <span className="hidden sm:block text-xs">Try Premium for ₹0</span>
          </div>
        </div>
      </div>
    </header>
  );
}
