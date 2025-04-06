import React from "react";

export default function Sidebar() {
  return (
    <aside className="bg-white border-r h-full p-4">
      <h1 className="text-2xl font-bold mb-6">Logo</h1>
      <ul className="space-y-3">
        <li className="font-semibold text-pink-500">Dashboard</li>
        <li>Projects</li>
        <li>Teams</li>
        <li>Analytics</li>
        <li>Messages</li>
        <li>Integrations</li>
      </ul>
    </aside>
  );
}
