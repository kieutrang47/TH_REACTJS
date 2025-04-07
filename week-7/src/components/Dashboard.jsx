import buy from "../assets/Lab_05/Button 1509.png";
import money from "../assets/Lab_05/Button 1529.png";
import account from "../assets/Lab_05/Button 1530.png";

import down from "../assets/Lab_05/Download.png";
import move from "../assets/Lab_05/Move up.png";
import a1 from "../assets/Lab_05/Avatar (1).png";
import a2 from "../assets/Lab_05/Avatar (2).png";
import a3 from "../assets/Lab_05/Avatar (3).png";
import a4 from "../assets/Lab_05/Avatar (4).png";
import a5 from "../assets/Lab_05/Avatar (5).png";
import a313 from "../assets/Lab_05/Avatar 313.png";

export default function DashboardPage() {
  const cards = [
    {
      title: "Turnover",
      value: "$92.405",
      icon: buy,
      change: "▲ 5.39%",
      bg: "bg-pink-100",
    },
    {
      title: "Profit",
      value: "$32.405",
      icon: money,
      change: "▲ 5.39%",
      bg: "bg-blue-100",
    },
    {
      title: "New customer",
      value: "289",
      icon: account,
      change: "▲ 6.39%",
      bg: "bg-blue-100",
    },
  ];

  const rows = [
    {
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
      avatar: a1,
    },
    {
      name: "Carlos Garcia",
      company: "SmoozeShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
      avatar: a2,
    },
    {
      name: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
      avatar: a3,
    },
    {
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
      avatar: a4,
    },
    {
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
      avatar: a5,
    },
    {
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
      avatar: a313,
    },
  ];

  return (
    <div className="p-6">
      {/* OVERVIEW */}
      <div className="mt-6">
        <div className="flex gap-x-2 mb-4">
          <h2 className="font-bold text-xl">OVERVIEW</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} rounded-md p-4 shadow-sm relative`}
            >
              <div className="absolute top-2 right-2">
                <img src={card.icon} alt="" />
              </div>
              <h4 className="font-bold text-lg">{card.title}</h4>
              <h1 className="text-2xl font-bold">{card.value}</h1>
              <div className="flex items-center mt-2">
                <h3 className="text-green-600">{card.change}</h3>
                <h3 className="text-gray-700 ms-2">Period of change</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED REPORT */}
      <div className="bg-white p-4 rounded shadow-sm mt-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Detailed report</h2>
          <div className="space-x-2 flex">
            <button className="flex border px-3 py-1 rounded text-pink-600">
              <img src={down} alt="" className="mr-2" />
              <span>Import</span>
            </button>
            <button className="flex border px-3 py-1 rounded text-pink-600">
              <img src={move} alt="" className="mr-2" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <table className="w-full text-left shadow-sm divide-y">
          <thead>
            <tr className="text-gray-600">
              <th></th>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Order Value</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="text-gray-700 shadow-sm">
                <td className="py-5">
                  <input type="checkbox" />
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-2">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className="py-5">{row.company}</td>
                <td className="py-5">{row.value}</td>
                <td className="py-5">{row.date}</td>
                <td className="py-5">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      row.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : row.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
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
    </div>
  );
}
