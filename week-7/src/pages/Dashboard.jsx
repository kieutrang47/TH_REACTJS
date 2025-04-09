import { useState, useEffect } from "react";
import OverviewCards from "../components/OverviewCards";
import DataTable from "../components/DataTable";
import AddUserModal from "../components/AddUserModal";

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Failed to fetch customers:", err));
  }, []);

  const handleAdd = (newCustomer) => {
    setCustomers((prev) => [newCustomer, ...prev]);
  };

  return (
    <div className="space-y-6">
      <OverviewCards />
      <DataTable
        customers={customers}
        setCustomers={setCustomers}
        onAddClick={() => setShowAddModal(true)} // Truyền hàm mở modal xuống
      />
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}

//caau 4 5 6 7 8
// import OverviewCards from "../components/OverviewCards";
// import DataTable from "../components/DataTable";

// export default function Dashboard() {
//   return (
//     <div>
//       <OverviewCards />
//       <DataTable />
//     </div>
//   );
// }
