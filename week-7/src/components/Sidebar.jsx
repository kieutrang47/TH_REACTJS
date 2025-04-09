// câu 10 - dịnh dạng đổi màu sắc theo yêu thích
import { NavLink } from "react-router-dom";
import image1858 from "../assets/Lab_05/Image 1858.png";
import sqare from "../assets/Lab_05/Squares four 1.png";
import folder from "../assets/Lab_05/Folder.png";
import group from "../assets/Lab_05/Groups.png";
import pie from "../assets/Lab_05/Pie chart.png";
import chat from "../assets/Lab_05/Chat.png";
import code from "../assets/Lab_05/Code.png";
import gr from "../assets/Lab_05/Group.png";

const menuItems = [
  { icon: sqare, label: "Dashboard", to: "/" },
  { icon: folder, label: "Projects", to: "/projects" },
  { icon: group, label: "Teams", to: "/teams" },
  { icon: pie, label: "Analytics", to: "/analytics" },
  { icon: chat, label: "Messages", to: "/messages" },
  { icon: code, label: "Integrations", to: "/integrations" },
];

export default function Sidebar() {
  return (
    <div className="w-72 border-r p-6 flex flex-col justify-between bg-white shadow-md min-h-screen">
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center mb-10">
          <img src={image1858} alt="logo" className="w-40 h-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {menuItems.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg w-full transition ${
                  isActive
                    ? "bg-pink-300 text-white shadow"
                    : "text-gray-700 hover:bg-pink-100"
                }`
              }
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Try Now Box */}
      <div className="bg-blue-50 p-4 rounded-2xl text-center">
        <img src={gr} alt="Upgrade" className="mb-4 w-full object-contain" />
        <p className="text-sm font-semibold text-gray-800 mb-1">
          V2.0 is available
        </p>
        <button className="mt-2 w-full h-10 border border-blue-400 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-all">
          Try now
        </button>
      </div>
    </div>
  );
}

// //updtae cau 5 + 6
// import { NavLink } from "react-router-dom";
// import image1858 from "../assets/Lab_05/Image 1858.png";
// import sqare from "../assets/Lab_05/Squares four 1.png";
// import folder from "../assets/Lab_05/Folder.png";
// import group from "../assets/Lab_05/Groups.png";
// import pie from "../assets/Lab_05/Pie chart.png";
// import chat from "../assets/Lab_05/Chat.png";
// import code from "../assets/Lab_05/Code.png";
// import gr from "../assets/Lab_05/Group.png";

// const menuItems = [
//   { icon: sqare, label: "Dashboard", to: "/" },
//   { icon: folder, label: "Projects", to: "/projects" },
//   { icon: group, label: "Teams", to: "/teams" },
//   { icon: pie, label: "Analytics", to: "/analytics" },
//   { icon: chat, label: "Messages", to: "/messages" },
//   { icon: code, label: "Integrations", to: "/integrations" },
// ];

// export default function Sidebar() {
//   return (
//     <div className="w-72 border-r p-6 flex flex-col justify-between">
//       <div>
//         <div className="flex items-center space-x-2 mb-10">
//           <img src={image1858} alt="logo" className="w-40 h-20" />
//         </div>

//         <nav className="space-y-2">
//           {menuItems.map(({ icon, label, to }) => (
//             <NavLink
//               key={label}
//               to={to}
//               className={({ isActive }) =>
//                 `flex items-center space-x-2 px-4 py-2 rounded-lg w-full ${
//                   isActive
//                     ? "bg-pink-300 text-white"
//                     : "hover:bg-pink-300 text-black"
//                 }`
//               }
//             >
//               <img src={icon} alt={label} className="w-5 h-5" />
//               <span>{label}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       <div className="bg-blue-300 p-4 rounded-lg">
//         <img src={gr} alt="Upgrade" className="mb-4" />
//         <button className="w-full h-10 rounded-lg bg-blue-100 text-blue-600 font-semibold">
//           Try now
//         </button>
//       </div>
//     </div>
//   );
// }

// import image1858 from "../assets/Lab_05/Image 1858.png";
// import sqare from "../assets/Lab_05/Squares four 1.png";
// import folder from "../assets/Lab_05/Folder.png";
// import group from "../assets/Lab_05/Groups.png";
// import pie from "../assets/Lab_05/Pie chart.png";
// import chat from "../assets/Lab_05/Chat.png";
// import code from "../assets/Lab_05/Code.png";
// import gr from "../assets/Lab_05/Group.png";

// export default function Sidebar() {
//   return (
//     <div className="w-72 border-r p-6 flex flex-col justify-between">
//       <div>
//         <div className="flex items-center space-x-2 mb-10">
//           <img src={image1858} alt="logo" className="w-40 h-20" />
//         </div>

//         <nav className="space-y-2">
//           {[
//             { icon: sqare, label: "Dashboard", active: true },
//             { icon: folder, label: "Projects" },
//             { icon: group, label: "Teams" },
//             { icon: pie, label: "Analytics" },
//             { icon: chat, label: "Messages" },
//             { icon: code, label: "Integrations" },
//           ].map(({ icon, label, active }) => (
//             <button
//               key={label}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full ${
//                 active
//                   ? "bg-pink-300 text-white"
//                   : "hover:bg-pink-300 text-black"
//               }`}
//             >
//               <img src={icon} alt="icon" className="w-5 h-5" />
//               <span>{label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       <div className="bg-blue-300 p-4 rounded-lg">
//         <img src={gr} alt="Upgrade" className="mb-4" />
//         <button className="w-full h-10 rounded-lg bg-blue-100 text-blue-600 font-semibold">
//           Try now
//         </button>
//       </div>
//     </div>
//   );
// }
