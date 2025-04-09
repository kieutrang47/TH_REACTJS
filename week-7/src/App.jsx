//cau 5
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Nội dung chính => pages */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
      {/* Toaster hiển thị thông báo toàn app */}
      <Toaster position="top-right" />
    </div>
  );
}

//cau 2 3 4
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import OverviewCards from "./components/OverviewCards";
// import DataTable from "./components/DataTable";
// import Pagination from "./components/Pagination";

// function App() {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-col flex-1 bg-white px-6 py-4">
//         <Header />
//         <OverviewCards />
//         <DataTable />
//         {/* <Pagination /> */}
//       </div>
//     </div>
//   );
// }

// export default App;

//step1_cau1
// import { useState } from "react";
// // import './App.css'
// import "./index.css";
// import image1858 from "./assets/Lab_05/Image 1858.png";
// import Search from "./assets/Lab_05/Search.png";
// import Bell from "./assets/Lab_05/Bell 1.png";
// import q1 from "./assets/Lab_05/Question 1.png";
// import a313 from "./assets/Lab_05/Avatar 313.png";
// import sqare from "./assets/Lab_05/Squares four 1.png";
// import folder from "./assets/Lab_05/Folder.png";
// import group from "./assets/Lab_05/Groups.png";
// import pie from "./assets/Lab_05/Pie chart.png";
// import chat from "./assets/Lab_05/Chat.png";
// import code from "./assets/Lab_05/Code.png";
// import gr from "./assets/Lab_05/Group.png";
// import buy from "./assets/Lab_05/Button 1509.png";
// import money from "./assets/Lab_05/Button 1529.png";
// import account from "./assets/Lab_05/Button 1530.png";
// import down from "./assets/Lab_05/Download.png";
// import move from "./assets/Lab_05/Move up.png";
// import a1 from "./assets/Lab_05/Avatar (1).png";
// import a2 from "./assets/Lab_05/Avatar (2).png";
// import a3 from "./assets/Lab_05/Avatar (3).png";
// import a4 from "./assets/Lab_05/Avatar (4).png";
// import a5 from "./assets/Lab_05/Avatar (5).png";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="container flex  border-gray-800 bg-white ">
//         <div className="header flex items-center space-x-2 p-6 border-b">
//           <img src={image1858} alt="logo" className="" />
//           <h2 className="text-pink-500 text-2xl font-bold justify-between text-center ml-35">
//             {" "}
//             DASHBOARD
//           </h2>
//           {/* <img src={Search} alt="" className='ml-170'/> */}
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="Search..."
//             className="border p-2 rounded-lg w-75 ml-180 bg-white"
//           />
//           <img src={Bell} alt="" className="m-3" />
//           <img src={q1} alt="" className="m-3" />
//           <img src={a313} alt="" className="m-3" />
//         </div>

//         <div className="menu mt-6 space-y-2 border-r ">
//           <button className="flex items-center space-x-2 bg-pink-300 hover:bg-pink-300 text-white px-4 py-2 rounded-lg w-60">
//             <img src={sqare} alt="Icon" className="w-5 h-5" />
//             <span>Dashboard</span>
//           </button>
//           <button className="flex items-center space-x-2  hover:bg-pink-300 text-black px-4 py-2 rounded-lg w-60">
//             <img src={folder} alt="Icon" className="w-5 h-5" />
//             <span>Projects</span>
//           </button>
//           <button className="flex items-center space-x-2  hover:bg-pink-300 text-black px-4 py-2 rounded-lg w-60">
//             <img src={group} alt="Icon" className="w-5 h-5" />
//             <span>Teams</span>
//           </button>
//           <button className="flex items-center space-x-2  hover:bg-pink-300 text-black px-4 py-2 rounded-lg w-60">
//             <img src={pie} alt="Icon" className="w-5 h-5" />
//             <span>Analytics</span>
//           </button>
//           <button className="flex items-center space-x-2  hover:bg-pink-300 text-black px-4 py-2 rounded-lg w-60">
//             <img src={chat} alt="Icon" className="w-5 h-5" />
//             <span>Messages</span>
//           </button>
//           <button className="flex items-center space-x-2 hover:bg-pink-300 text-black px-4 py-2 rounded-lg w-60">
//             <img src={code} alt="Icon" className="w-5 h-5" />
//             <span>Integrations</span>
//           </button>
//           <div className="bg-blue-300 mt-20 p-6 mr-0.5">
//             <img src={gr} alt="" className="mt-25" />
//             <button className="space-x-2 border-2 bg-blue-100  text-blue-600 h-10 w-70 mt-5 rounded-lg">
//               <span>Try now</span>
//             </button>
//           </div>
//         </div>

//         {/*3 cai card*/}
//         <div className="content">
//           <div className="flex gap-x-2 mt-2 mb-2">
//             <img src={sqare} alt="logo" />
//             <h2 className="font-bold text-xl">OVERVIEW</h2>
//           </div>

//           {/*card ne*/}
//           <div className="grid grid-cols-3 gap-4">
//             {/*card1*/}
//             <div className="bg-pink-100 rounded-md p-3 shadow-sm relative">
//               <div className="absolute top-2 right-2">
//                 <img src={buy} alt="" />
//               </div>
//               <h4 className="font-bold text-xl">Turnover</h4>
//               <h1 className="text-2xl font-bold">$92.405</h1>
//               <div className="flex">
//                 <h3 className="text-green-600">▲ 5.39%</h3>
//                 <h3 className="text-gray-700 ms-2"> Period of change</h3>
//               </div>
//             </div>
//             {/*card2*/}
//             <div className="bg-blue-100 rounded-md p-3 shadow-sm relative">
//               <div className="absolute top-2 right-2">
//                 <img src={money} alt="" />
//               </div>
//               <h4 className="font-bold text-xl">Profit</h4>
//               <h1 className="text-2xl font-bold">$32.405</h1>
//               <div className="flex">
//                 <h3 className="text-green-600">▲ 5.39%</h3>
//                 <h3 className="text-gray-700 ms-2"> Period of change</h3>
//               </div>
//             </div>
//             {/*card3*/}
//             <div className="bg-blue-100 rounded-md p-3 shadow-sm relative">
//               <div className="absolute top-2 right-2">
//                 <img src={account} alt="" />
//               </div>
//               <h4 className="font-bold text-xl">New customer</h4>
//               <h1 className="text-2xl font-bold">289</h1>
//               <div className="flex">
//                 <h3 className="text-green-600">▲ 6.39%</h3>
//                 <h3 className="text-gray-700 ms-2"> Period of change</h3>
//               </div>
//             </div>
//           </div>
//           {/* Detailed Report */}
//           <div className="bg-white p-4 rounded shadow-sm mt-3">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-lg font-semibold">Detailed report</h2>
//               <div className="space-x-2 flex">
//                 <button className=" flex border px-3 py-1 rounded text-pink-600">
//                   <img src={down} alt="" />
//                   <span>Import</span>{" "}
//                 </button>
//                 <button className="flex border px-3 py-1 rounded text-pink-600">
//                   <img src={move} alt="" />
//                   <span className="mr-2">Export</span>
//                 </button>
//               </div>
//             </div>

//             <table className="w-full text-left shadow-sm divide-y">
//               <thead>
//                 <tr className="text-gray-600">
//                   <th></th>
//                   <th>Customer Name</th>
//                   <th>Company</th>
//                   <th>Order Value</th>
//                   <th>Order Date</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody className="">
//                 {[
//                   {
//                     name: "Elizabeth Lee",
//                     company: "AvatarSystems",
//                     value: "$359",
//                     date: "10/07/2023",
//                     status: "New",
//                     avatar: a1,
//                   },
//                   {
//                     name: "Carlos Garcia",
//                     company: "SmoozeShift",
//                     value: "$747",
//                     date: "24/07/2023",
//                     status: "New",
//                     avatar: a2,
//                   },
//                   {
//                     name: "Elizabeth Bailey",
//                     company: "Prime Time Telecom",
//                     value: "$564",
//                     date: "08/08/2023",
//                     status: "In-progress",
//                     avatar: a3,
//                   },
//                   {
//                     name: "Ryan Brown",
//                     company: "OmniTech Corporation",
//                     value: "$541",
//                     date: "31/08/2023",
//                     status: "In-progress",
//                     avatar: a4,
//                   },

//                   {
//                     name: "Ryan Young",
//                     company: "DataStream Inc.",
//                     value: "$769",
//                     date: "01/05/2023",
//                     status: "Completed",
//                     avatar: a5,
//                   },
//                   {
//                     name: "Hailey Adams",
//                     company: "FlowRush",
//                     value: "$922",
//                     date: "10/06/2023",
//                     status: "Completed",
//                     avatar: a313,
//                   },
//                 ].map((row, i) => (
//                   <tr key={i} className="text-gray-700 shadow-sm">
//                     <td className="py-5">
//                       <input type="checkbox" />
//                     </td>
//                     <td className="py-5">
//                       <div className="flex items-center gap-2">
//                         <img
//                           src={row.avatar}
//                           alt={row.name}
//                           className="rounded-full object-cover"
//                         />
//                         <span> {row.name}</span>
//                       </div>
//                     </td>
//                     <td className="py-5">{row.company}</td>
//                     <td className="py-5">{row.value}</td>
//                     <td className="py-5">{row.date}</td>
//                     <td className="py-5">
//                       <span
//                         className={`px-2 py-1 text-xs rounded-full ${
//                           row.status === "New"
//                             ? "bg-blue-100 text-blue-600"
//                             : row.status === "In-progress"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-green-100 text-green-700"
//                         }`}
//                       >
//                         {row.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="footer">
//           <div className="flex items-center justify-between mt-4">
//             <p className="text-sm text-gray-500">63 results</p>
//             <div className="flex items-center space-x-2">
//               <button className="text-gray-400 hover:text-pink-500">
//                 &lt;
//               </button>
//               {[1, 2, 3, 4, "...", 10, 11].map((page, i) => (
//                 <button
//                   key={i}
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
//                     page === 1
//                       ? "bg-pink-500 text-white"
//                       : "text-gray-500 hover:bg-gray-200"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//               <button className="text-gray-400 hover:text-pink-500">
//                 &gt;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// test
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import TestTailwind from "./components/TestTailwind";
// function App() {
//   return (
//     <div>
//       <TestTailwind />
//     </div>
//   );
// }

// export default App;
