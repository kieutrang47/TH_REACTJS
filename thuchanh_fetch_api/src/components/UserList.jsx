import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import UserDetails from "./UserDetails";

const UserList = () => {
  const { users, loading } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="user-list-container">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          className="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <ul className="user-list">
            {currentUsers.map((user) => (
              <motion.li
                key={user.id}
                className="user-item"
                onClick={() => setSelectedUser(user)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="user-item-icon">👤</span>
                <div className="user-item-content">
                  <h2>{user.name}</h2>
                  <p>Email: {user.email}</p>
                  <p>Thành phố: {user.address.city}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="nav-button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Trang trước
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="nav-button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Trang sau
              </button>
            </div>
          )}
        </>
      )}

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserList;