import React, { useReducer, useState } from 'react';

// Reducer để quản lý danh sách sản phẩm
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload); // Xoá sản phẩm theo id
    default:
      return state;
  }
};

const App = () => {
  // Dùng useReducer để quản lý sản phẩm
  const [products, dispatch] = useReducer(productReducer, []);

  // Dữ liệu input
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productStock, setProductStock] = useState('');

  // Xử lý thêm sản phẩm
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(), // tạo id duy nhất
      name: productName,
      price: productPrice,
      category: productCategory,
      stock: productStock,
    };

    // Gửi action để thêm sản phẩm
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });

    // Clear form sau khi thêm
    setProductName('');
    setProductPrice('');
    setProductCategory('');
    setProductStock('');
  };

  // Xử lý xoá sản phẩm
  const handleDeleteProduct = (id) => {
    // Gửi action để xoá sản phẩm
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  return (
    <div className="container mt-5">
      <h2>Quản lý sản phẩm</h2>

      {/* Form để thêm sản phẩm */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tên sản phẩm"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Giá"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Danh mục"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Tồn kho"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddProduct}>
        Thêm sản phẩm
      </button>

      {/* Danh sách sản phẩm */}
      <h3 className="mt-5">Danh sách sản phẩm</h3>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <strong>{product.name}</strong><br />
            Giá: {product.price} VNĐ | Danh mục: {product.category} | Tồn kho: {product.stock}
            {/* Nút Xoá */}
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
