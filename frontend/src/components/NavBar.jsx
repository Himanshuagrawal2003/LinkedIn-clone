import React, { useEffect, useState, useRef } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between px-3 sm:px-6 py-2 gap-y-2">
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-[100px]">
          <div
            onClick={() => navigate("/feed")}
            className="flex items-center justify-center bg-[#0A66C2] text-white text-2xl font-bold w-8 h-8 rounded-sm cursor-pointer"
          >
            in
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-[#EEF3F8] rounded-full px-3 py-2 w-[200px] sm:w-[250px] lg:w-[350px]">
            <FiSearch className="text-gray-600 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Center Icons */}
        <nav className="flex items-center gap-4 sm:gap-6 text-gray-600 text-sm mx-auto md:mx-0">
          <div
            onClick={() => navigate("/feed")}
            className="flex flex-col items-center cursor-pointer text-[#0A66C2]"
          >
            <FaHome className="text-lg sm:text-xl" />
            <span className="hidden sm:block text-xs mt-1 font-semibold">
              Home
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <FaUserFriends className="text-lg sm:text-xl" />
            <span className="hidden sm:block text-xs mt-1">Network</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition">
            <FaBriefcase className="text-lg sm:text-xl" />
            <span className="hidden sm:block text-xs mt-1">Jobs</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition relative">
            <FaCommentDots className="text-lg sm:text-xl" />
            <span className="hidden sm:block text-xs mt-1">Message</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#0A66C2] transition relative">
            <FaBell className="text-lg sm:text-xl" />
            <span className="hidden sm:block text-xs mt-1">Alerts</span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={user?.avatar || defaultAvatar}
                onClick={() => navigate("/profile")}
                alt="profile"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 object-cover"
              />
              <span className="hidden sm:block text-xs mt-1">
                {user?.name ? user.name.split(" ")[0] : "Me"} ▼
              </span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 sm:w-56 bg-white border rounded-md shadow-md text-sm py-2 z-50">
                <div className="px-4 pb-2 border-b">
                  <p className="text-gray-900 font-semibold mb-1">Account</p>
                  <p className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1">
                    Settings & Privacy
                  </p>
                  <p className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1">
                    Help
                  </p>
                  <p className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1">
                    Language
                  </p>
                </div>

                <div className="px-4 py-2 border-b">
                  <p className="text-gray-900 font-semibold mb-1">Manage</p>
                  <p className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1">
                    Posts & Activity
                  </p>
                  <p className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1">
                    Job Posting Account
                  </p>
                </div>

                <div className="px-4 pt-2">
                  <p
                    onClick={handleSignOut}
                    className="text-gray-700 hover:bg-gray-50 cursor-pointer px-1 py-1"
                  >
                    Sign Out
                  </p>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6 text-gray-600 text-sm">
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
