import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";

export default function RootLayout() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
