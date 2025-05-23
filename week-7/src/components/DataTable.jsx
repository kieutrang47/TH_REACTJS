import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const statusStyles = {
  New: "bg-blue-100 text-blue-500",
  "In-progress": "bg-yellow-100 text-yellow-600",
  Completed: "bg-green-100 text-green-500",
};

const DataTable = ({ customers, setCustomers, onAddClick }) => {
  const [editUser, setEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const totalPages = Math.ceil(customers.length / rowsPerPage);
  const currentData = customers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/customers/${editUser.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editUser),
        }
      );
      if (response.ok) {
        setCustomers((prev) =>
          prev.map((cus) => (cus.id === editUser.id ? editUser : cus))
        );
        setEditUser(null);
      }
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/customers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Gọi hàm callback từ props để cập nhật lại danh sách ở Dashboard
        setCustomers((prev) => prev.filter((cus) => cus.id !== id));
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const confirmDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This customer will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48", // pink-600
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      handleDelete(id);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 mt-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <img
            src="src/assets/Lab_05/File text 1.png"
            alt="icon"
            className="w-5 h-5"
          />
          Detailed report
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-pink-500 text-pink-500 px-4 py-1.5 rounded-lg text-sm hover:bg-pink-50">
            <img
              src="src/assets/Lab_05/Download.png"
              alt="icon"
              className="w-4 h-4"
            />
            Import
          </button>
          <button className="flex items-center gap-2 border border-pink-500 text-pink-500 px-4 py-1.5 rounded-lg text-sm hover:bg-pink-50">
            <img
              src="src/assets/Lab_05/Move up.png"
              alt="icon"
              className="w-4 h-4"
            />
            Export
          </button>
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 bg-pink-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-pink-600"
          >
            ➕ Add customer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Customer Name</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Order Value</th>
              <th className="p-3 text-left">Order Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((customer) => (
              <tr key={customer.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center gap-2 font-medium text-gray-800">
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {customer.name}
                </td>
                <td className="p-3">{customer.company}</td>
                <td className="p-3">${customer.orderValue}</td>
                <td className="p-3">
                  {new Date(customer.orderDate).toLocaleDateString("en-GB")}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusStyles[customer.status]
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-3">
                  <Pencil
                    size={16}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    onClick={() => setEditUser(customer)}
                  />
                </td>
                <td className="p-3 ">
                  <button
                    onClick={() => confirmDelete(customer.id)}
                    title="Delete"
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>{customers.length} results</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-pink-500 text-white"
                  : "text-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-2"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
          <div className="bg-white p-8 rounded-3xl w-[440px] shadow-2xl border border-pink-200 relative animate-fadeIn">
            <h3 className="text-2xl font-bold text-pink-500 mb-6 flex items-center gap-3">
              <img
                src="src/assets/Lab_05/create.png"
                alt="icon"
                className="w-6 h-6"
              />
              Edit customer
            </h3>

            <div className="space-y-5 text-sm">
              <label className="block">
                <span className="text-gray-500 font-medium">Customer Name</span>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={editUser.name}
                  onChange={(e) =>
                    setEditUser({ ...editUser, name: e.target.value })
                  }
                  placeholder="e.g. John Doe"
                />
              </label>

              <label className="block">
                <span className="text-gray-500 font-medium">Company</span>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={editUser.company}
                  onChange={(e) =>
                    setEditUser({ ...editUser, company: e.target.value })
                  }
                  placeholder="e.g. Acme Inc."
                />
              </label>

              <label className="block">
                <span className="text-gray-500 font-medium">Order Value</span>
                <input
                  type="number"
                  className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={editUser.orderValue}
                  onChange={(e) =>
                    setEditUser({
                      ...editUser,
                      orderValue: Number(e.target.value),
                    })
                  }
                  placeholder="e.g. 1500"
                />
              </label>

              <label className="block">
                <span className="text-gray-500 font-medium">Status</span>
                <select
                  className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={editUser.status}
                  onChange={(e) =>
                    setEditUser({ ...editUser, status: e.target.value })
                  }
                >
                  <option>New</option>
                  <option>In-progress</option>
                  <option>Completed</option>
                </select>
              </label>
            </div>

            <div className="flex justify-end gap-4 pt-8">
              <button
                className="px-5 py-2 text-pink-500 border border-pink-300 rounded-full hover:bg-pink-50 transition font-semibold"
                onClick={() => setEditUser(null)}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition font-semibold shadow-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

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

// ✏️
