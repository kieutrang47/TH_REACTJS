import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Thêm thư viện react-icons cho icon

const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price.toLocaleString()} VNĐ</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <td>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(product.id)}
        >
          <FaTrashAlt /> Xoá
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
