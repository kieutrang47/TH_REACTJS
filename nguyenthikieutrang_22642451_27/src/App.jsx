import React, { useState, useEffect } from 'react';
import ProductItem from './components/ProductItem';

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', stock: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Load products from localStorage when the component mounts
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Save products to localStorage whenever the products list changes
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  // Handle input change for new product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category && newProduct.stock) {
      const newProductData = {
        id: Date.now(),
        name: newProduct.name,
        price: newProduct.price,
        category: newProduct.category,
        stock: newProduct.stock,
      };
      const updatedProducts = [...products, newProductData];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', category: '', stock: '' }); // Reset input fields
    }
  };

  // Handle deleting a product
  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter products based on search and category
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const filteredByCategory = filteredProducts.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true
  );

  // Calculate total products and total stock
  const totalProducts = filteredByCategory.length;
  const totalStock = filteredByCategory.reduce((total, product) => total + parseInt(product.stock), 0);

  return (
    <div className="container py-5">
      <h1 className="display-4 text-primary">Quản lý sản phẩm</h1>

      {/* Search input */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Tìm kiếm sản phẩm..."
        onChange={handleSearchChange}
      />

      {/* Category filter */}
      <select className="form-control mb-4" onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Chọn danh mục</option>
        <option value="Thời trang">Thời trang</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Gia dụng">Gia dụng</option>
      </select>

      {/* Add new product */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          className="form-control mb-2"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          className="form-control mb-2"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Danh mục"
          className="form-control mb-2"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Tồn kho"
          className="form-control mb-2"
          value={newProduct.stock}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct} className="btn btn-success w-100">Thêm sản phẩm</button>
      </div>

      {/* Display total products and stock */}
      <p>Tổng sản phẩm: {totalProducts} | Tổng tồn kho: {totalStock}</p>

      {/* Products Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredByCategory.map((product) => (
            <ProductItem key={product.id} product={product} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
