// src/components/ProductItem.jsx
function ProductItem({ product, onDelete }) {
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price.toLocaleString()} VND</td>
        <td>{product.category}</td>
        <td>{product.stock}</td>
        <td>
          <button onClick={onDelete}>Xoá</button>
        </td>
      </tr>
    );
  }
  
  export default ProductItem;
  