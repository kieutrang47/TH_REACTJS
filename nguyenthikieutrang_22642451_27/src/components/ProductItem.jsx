import React from 'react';

const ProductItem = ({ product }) => (
  <div className="card mb-3">
    <div className="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mb-1">Giá: {product.price.toLocaleString()}đ</p>
        <p className="card-text mb-1">Danh mục: {product.category}</p>
        <p className="card-text">Tồn kho: {product.stock}</p>
      </div>
      <button className="btn btn-danger">Xoá</button>
    </div>
  </div>
);

export default ProductItem;
