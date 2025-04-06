import React from 'react';

const Table = () => {
  const data = [
    { name: 'Elizabeth Lee', company: 'AutoSystems', orderValue: '$159', date: '10/07/2023', status: 'New' },
    { name: 'Carlos Garcia', company: 'SnoozeShift', orderValue: '$147', date: '24/07/2023', status: 'New' },
    { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: '$564', date: '08/08/2023', status: 'In-progress' },
    { name: 'Ryan Brown', company: 'OmniTech Corporation', orderValue: '$841', date: '31/08/2023', status: 'In-progress' },
    { name: 'Ryan Young', company: 'DataStream Inc.', orderValue: '$798', date: '15/09/2023', status: 'Completed' },
    { name: 'Hailey Adams', company: 'FlowRush', orderValue: '$522', date: '22/09/2023', status: 'Completed' },
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Detailed Report</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg text-gray-600">Import</button>
          <button className="px-3 py-1 bg-pink-500 text-white rounded-lg">Export</button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-gray-600">Customer Name</th>
            <th className="p-3 text-left text-gray-600">Company</th>
            <th className="p-3 text-left text-gray-600">Order Value</th>
            <th className="p-3 text-left text-gray-600">Order Date</th>
            <th className="p-3 text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="p-3 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span>{row.name}</span>
              </td>
              <td className="p-3">{row.company}</td>
              <td className="p-3">{row.orderValue}</td>
              <td className="p-3">{row.date}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    row.status === 'New'
                      ? 'bg-blue-100 text-blue-600'
                      : row.status === 'In-progress'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;