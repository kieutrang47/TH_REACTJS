import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', price: '', category: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Tên sản phẩm"
        value={product.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Giá"
        value={product.price}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Danh mục"
        value={product.category}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Tồn kho"
        value={product.stock}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
};

export default AddProductForm;
