const ProductItem = ({ product, index, onDelete }) => {
    return (
      <tr>
        <td className="py-1 px-4 border">{product.name}</td>
        <td className="py-1 px-4 border">{product.price.toLocaleString()}₫</td>
        <td className="py-1 px-4 border">{product.category}</td>
        <td className="py-1 px-4 border">{product.stock}</td>
        <td className="py-1 px-4 border">
          <button
            onClick={() => onDelete(index)}
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  };
  
  export default ProductItem;
  