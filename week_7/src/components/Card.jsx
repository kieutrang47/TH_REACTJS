import React from "react";

const Card = ({ title, value, change, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-sm ${bgColor}`}>
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{change}</p>
    </div>
  );
};

export default Card;
