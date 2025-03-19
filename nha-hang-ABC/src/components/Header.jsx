import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import BookTable from './BookTable';
import Cart from './Cart';
import { OrderContext } from '../context/OrderContext';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(OrderContext); // Lấy giỏ hàng để hiển thị số lượng

  return (
    <header className="bg-warning text-dark shadow-lg">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          KT Restaurant
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/menu"
              >
                Thực đơn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                to="/contact"
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <BookTable />
            <div className="position-relative">
              <button
                className="btn btn-outline-dark p-2"
                onClick={() => setShowCart(true)}
              >
                <i className="bi bi-cart3"></i>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal giỏ hàng */}
      {showCart && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center"
          style={{ zIndex: 1050 }}
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            style={{ maxWidth: '600px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Giỏ hàng</h5>
              <button
                className="btn-close"
                onClick={() => setShowCart(false)}
              ></button>
            </div>
            <Cart onClose={() => setShowCart(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;