import React, { useState, useReducer } from 'react';
import './App.css'; // Import file CSS

// Dữ liệu mẫu sản phẩm
const initialProducts = [
  { id: 1, name: 'Áo thun nam', price: 200000, category: 'Thời trang', stock: 50 },
  { id: 2, name: 'Laptop Dell XPS 13', price: 25000000, category: 'Công nghệ', stock: 30 },
  { id: 3, name: 'Bàn phím cơ Logitech', price: 1200000, category: 'Công nghệ', stock: 15 },
  { id: 4, name: 'Nồi cơm điện Panasonic', price: 1500000, category: 'Gia dụng', stock: 40 },
  { id: 5, name: 'Áo sơ mi nữ', price: 300000, category: 'Thời trang', stock: 20 },
  { id: 6, name: 'Smartphone iPhone 13', price: 20000000, category: 'Công nghệ', stock: 25 },
  { id: 7, name: 'Máy xay sinh tố', price: 800000, category: 'Gia dụng', stock: 10 }
];

// Reducer để quản lý state
function productReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return { ...state, categoryFilter: action.category };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(productReducer, { products: initialProducts, categoryFilter: '' });
  const { products, categoryFilter } = state;

  // Lọc sản phẩm theo danh mục
  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  // Handler khi chọn danh mục
  const handleCategoryChange = (event) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', category: event.target.value });
  };

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>

      {/* Dropdown chọn danh mục */}
      <div>
        <label>Lọc theo danh mục: </label>
        <select onChange={handleCategoryChange}>
          <option value="">Tất cả</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
      </div>

      {/* Hiển thị danh sách sản phẩm lọc được */}
      <div>
        <h2>Danh sách sản phẩm</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.name}</strong><br />
                Giá: {product.price} VNĐ<br />
                Danh mục: {product.category}<br />
                Tồn kho: {product.stock}
              </div>
              <button>XOÁ</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
