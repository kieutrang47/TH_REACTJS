import { Pencil } from "lucide-react";
import StatusBadge from "./StatusBadge";

const mockData = [
  {
    id: 1,
    customerName: "Elizabeth Lee",
    company: "AvatarSystems",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782850/Avatar_4_sqnlgt.png",
    orderValue: 359,
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: 2,
    customerName: "Carlos Garcia",
    company: "SmoozeShift",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782850/Avatar_4_sqnlgt.png",
    orderValue: 747,
    orderDate: "24/07/2023",
    status: "New",
  },
  {
    id: 3,
    customerName: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782849/Avatar_5_zifhoi.png",
    orderValue: 564,
    orderDate: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 4,
    customerName: "Ryan Brown",
    company: "OmniTech Corporation",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782849/Avatar_1_qos7ap.png",
    orderValue: 541,
    orderDate: "31/08/2023",
    status: "In-progress",
  },
  {
    id: 5,
    customerName: "Ryan Young",
    company: "DataStream Inc.",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782849/Avatar_3_cdly7h.png",
    orderValue: 769,
    orderDate: "01/05/2023",
    status: "Completed",
  },
  {
    id: 6,
    customerName: "Hailey Adams",
    company: "FlowRush",
    avatar:
      "https://res.cloudinary.com/dxfbutjyu/image/upload/v1743782849/Avatar_2_qlwgra.png",
    orderValue: 922,
    orderDate: "10/06/2023",
    status: "Completed",
  },
];

export default function DataTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3176/3176360.png"
            className="w-5 h-5"
            alt="report"
          />
          Detailed report
        </h2>
        <div className="flex gap-2">
          <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-100">
            <span>📥</span> Import
          </button>
          <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-100">
            <span>📤</span> Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Order Value</th>
              <th className="px-4 py-3">Order Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center gap-2 font-semibold">
                  <img
                    src={item.avatar}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                  {item.customerName}
                </td>
                <td className="px-4 py-3">{item.company}</td>
                <td className="px-4 py-3">${item.orderValue}</td>
                <td className="px-4 py-3">{item.orderDate}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-4 py-3">
                  <Pencil className="w-4 h-4 text-gray-500 hover:text-black cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-4 px-1">
        <p>63 results</p>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 rounded hover:bg-gray-100">&lt;</button>
          {[1, 2, 3, 4, "...", 10, 11].map((n, i) => (
            <button
              key={i}
              className={`px-2 py-1 rounded-full ${
                n === 1 ? "bg-pink-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {n}
            </button>
          ))}
          <button className="px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}

// import down from "../assets/Lab_05/Download.png";
// import move from "../assets/Lab_05/Move up.png";
// import a1 from "../assets/Lab_05/Avatar (1).png";
// import a2 from "../assets/Lab_05/Avatar (2).png";
// import a3 from "../assets/Lab_05/Avatar (3).png";
// import a4 from "../assets/Lab_05/Avatar (4).png";
// import a5 from "../assets/Lab_05/Avatar (5).png";
// import a313 from "../assets/Lab_05/Avatar 313.png";

// const rows = [
//   {
//     name: "Elizabeth Lee",
//     company: "AvatarSystems",
//     value: "$359",
//     date: "10/07/2023",
//     status: "New",
//     avatar: a1,
//   },
//   {
//     name: "Carlos Garcia",
//     company: "SmoozeShift",
//     value: "$747",
//     date: "24/07/2023",
//     status: "New",
//     avatar: a2,
//   },
//   {
//     name: "Elizabeth Bailey",
//     company: "Prime Time Telecom",
//     value: "$564",
//     date: "08/08/2023",
//     status: "In-progress",
//     avatar: a3,
//   },
//   {
//     name: "Ryan Brown",
//     company: "OmniTech Corporation",
//     value: "$541",
//     date: "31/08/2023",
//     status: "In-progress",
//     avatar: a4,
//   },
//   {
//     name: "Ryan Young",
//     company: "DataStream Inc.",
//     value: "$769",
//     date: "01/05/2023",
//     status: "Completed",
//     avatar: a5,
//   },
//   {
//     name: "Hailey Adams",
//     company: "FlowRush",
//     value: "$922",
//     date: "10/06/2023",
//     status: "Completed",
//     avatar: a313,
//   },
// ];

// export default function DataTable() {
//   return (
//     <div className="bg-white p-4 rounded shadow-sm mt-6">
//       <div className="flex justify-between mb-4">
//         <h2 className="text-lg font-semibold">Detailed report</h2>
//         <div className="space-x-2 flex">
//           <button className="flex border px-3 py-1 rounded text-pink-600">
//             <img src={down} alt="" className="mr-2" />
//             <span>Import</span>
//           </button>
//           <button className="flex border px-3 py-1 rounded text-pink-600">
//             <img src={move} alt="" className="mr-2" />
//             <span>Export</span>
//           </button>
//         </div>
//       </div>

//       <table className="w-full text-left shadow-sm divide-y">
//         <thead>
//           <tr className="text-gray-600">
//             <th></th>
//             <th>Customer Name</th>
//             <th>Company</th>
//             <th>Order Value</th>
//             <th>Order Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, i) => (
//             <tr key={i} className="text-gray-700 shadow-sm">
//               <td className="py-5">
//                 <input type="checkbox" />
//               </td>
//               <td className="py-5">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={row.avatar}
//                     alt={row.name}
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <span>{row.name}</span>
//                 </div>
//               </td>
//               <td className="py-5">{row.company}</td>
//               <td className="py-5">{row.value}</td>
//               <td className="py-5">{row.date}</td>
//               <td className="py-5">
//                 <span
//                   className={`px-2 py-1 text-xs rounded-full ${
//                     row.status === "New"
//                       ? "bg-blue-100 text-blue-600"
//                       : row.status === "In-progress"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-green-100 text-green-700"
//                   }`}
//                 >
//                   {row.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
