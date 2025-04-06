import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-pink-100 p-4 rounded">Turnover</div>
        <div className="bg-blue-100 p-4 rounded">Profit</div>
        <div className="bg-cyan-100 p-4 rounded">New Customers</div>
      </div>
      <div className="bg-white shadow p-4 rounded">
        DataTable will go here...
      </div>
    </div>
  );
}
