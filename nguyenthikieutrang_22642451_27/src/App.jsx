import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm 1', price: 100000, category: 'Thời trang', stock: 10 },
    { id: 2, name: 'Sản phẩm 2', price: 200000, category: 'Công nghệ', stock: 5 },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-4 text-primary">Quản lý sản phẩm</h1>
        <button className="btn btn-success">Thêm sản phẩm</button>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Tìm kiếm sản phẩm..."
          className="form-control form-control-lg w-50 mx-auto"
        />
      </div>

      {/* Product Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Danh mục</th>
              <th>Tồn kho</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with total products and stock */}
      <div className="mt-4 text-center">
        <p className="lead">
          Tổng sản phẩm: {products.length} | Tổng tồn kho: {products.reduce((total, product) => total + product.stock, 0)}
        </p>
      </div>
    </div>
  );
};

export default App;
