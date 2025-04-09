import { useState } from "react";

export default function AddUserModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const newCustomer = await res.json();
      onAdd(newCustomer);
      onClose();
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      {/* Modal không có lớp nền đen */}
      <div className="bg-[#fff0f5] p-6 rounded-2xl w-full max-w-md shadow-2xl border border-pink-200 animate-fadeIn pointer-events-auto">
        <h2 className="text-xl font-bold mb-4 text-pink-500">
          💖 Add New Customer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="number"
            name="orderValue"
            placeholder="Order Value"
            value={formData.orderValue}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <option>New</option>
            <option>In-progress</option>
            <option>Completed</option>
          </select>
          <input
            type="text"
            name="avatar"
            placeholder="Avatar URL"
            value={formData.avatar}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-pink-300 text-pink-500 rounded-xl hover:bg-pink-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// câu 9
// import { useState } from "react";

// export default function AddUserModal({ onClose, onAdd }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     orderValue: "",
//     orderDate: "",
//     status: "New",
//     avatar: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3001/customers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const newCustomer = await res.json();
//       onAdd(newCustomer); // callback để update lại danh sách ở Dashboard
//       onClose(); // đóng modal
//     } catch (err) {
//       console.error("Error adding customer:", err);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
//         <h2 className="text-lg font-bold mb-4">➕ Add New Customer</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Customer Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//           <input
//             type="text"
//             name="company"
//             placeholder="Company"
//             value={formData.company}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//           <input
//             type="number"
//             name="orderValue"
//             placeholder="Order Value"
//             value={formData.orderValue}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//           <input
//             type="date"
//             name="orderDate"
//             value={formData.orderDate}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           >
//             <option>New</option>
//             <option>In-progress</option>
//             <option>Completed</option>
//           </select>
//           <input
//             type="text"
//             name="avatar"
//             placeholder="Avatar URL"
//             value={formData.avatar}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border rounded hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
