import { motion } from "framer-motion";

const UserDetails = ({ user, onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <span className="modal-icon">👤</span>
          <h2>{user.name}</h2>
        </div>
        <p>
          <span className="icon">📧</span>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <span className="icon">📞</span>
          <strong>Số điện thoại:</strong> {user.phone}
        </p>
        <p>
          <span className="icon">🌐</span>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <span className="icon">🏢</span>
          <strong>Công ty:</strong> {user.company.name}
        </p>
        <button className="close-button" onClick={onClose}>
          Đóng
        </button>
      </motion.div>
    </motion.div>
  );
};

export default UserDetails;