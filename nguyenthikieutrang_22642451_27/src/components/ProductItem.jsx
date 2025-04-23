import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price.toLocaleString()} VNĐ</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Xoá</button>
      </td>
    </tr>
  );
};

export default ProductItem;
