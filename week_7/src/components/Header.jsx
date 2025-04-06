import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 border-b bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded w-1/3"
      />
      <div className="flex items-center gap-4">
        <span>
          <img src="public/Bell 1.png" alt="" />
        </span>
        <span>
          <img src="public/Question 1.png" alt="" />
        </span>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
