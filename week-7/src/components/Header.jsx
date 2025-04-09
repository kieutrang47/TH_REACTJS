import { useState } from "react";
import Search from "../assets/Lab_05/Search.png";
import Bell from "../assets/Lab_05/Bell 1.png";
import q1 from "../assets/Lab_05/Question 1.png";
import a313 from "../assets/Lab_05/Avatar 313.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm relative">
      {/* Title */}
      <h2 className="text-2xl font-bold text-pink-500 tracking-wide">
        DASHBOARD
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <img
            src={Search}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 relative">
          {/* Bell with notification badge */}
          <div className="relative cursor-pointer hover:opacity-80 transition">
            <img src={Bell} alt="Notifications" className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow-sm">
              3
            </span>
          </div>

          {/* Help icon */}
          <img
            src={q1}
            alt="Help"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />

          {/* Avatar with dropdown menu */}
          <div className="relative">
            <img
              src={a313}
              alt="Avatar"
              onClick={toggleMenu}
              className="w-9 h-9 rounded-full object-cover border-2 border-pink-300 shadow-sm cursor-pointer"
            />

            {/* Dropdown menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-xl w-40 z-50">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">
                    👤 Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">
                    ⚙️ Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">
                    🚪 Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
