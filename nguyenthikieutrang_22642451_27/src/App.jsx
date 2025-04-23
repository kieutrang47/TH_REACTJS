import React, { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [
      { name: 'Áo thun', price: 120000, category: 'Thời trang', stock: 10 },
      { name: 'Laptop Dell', price: 15000000, category: 'Công nghệ', stock: 5 },
      { name: 'Máy xay sinh tố', price: 700000, category: 'Gia dụng', stock: 3 },
    ];
  });

  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', stock: '' });
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('Tất cả');

  // ✅ Lưu localStorage mỗi khi thay đổi sản phẩm
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // ✅ Thêm sản phẩm
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category && newProduct.stock) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: '', price: '', category: '', stock: '' });
    }
  };

  // ✅ Xoá sản phẩm
  const handleDeleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  // ✅ Lọc theo tên và danh mục
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === 'Tất cả' || product.category === filterCategory)
  );

  // ✅ Phần 7: Tính tổng số sản phẩm & tổng tồn kho
  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((sum, product) => sum + Number(product.stock), 0);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>

      {/* Nhập sản phẩm */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-1 rounded"
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-1 rounded"
        />
        <input
          type="text"
          placeholder="Danh mục"
          value={newProduct.category}
          onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
          className="border p-1 rounded"
        />
        <input
          type="number"
          placeholder="Tồn kho"
          value={newProduct.stock}
          onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })}
          className="border p-1 rounded"
        />
      </div>
      <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-1 rounded mb-4">
        Thêm sản phẩm
      </button>

      {/* Tìm kiếm và lọc */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-1 rounded flex-1"
        />
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="border p-1 rounded w-full md:w-1/3"
        >
          <option value="Tất cả">Tất cả</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
      </div>

      {/* ✅ Phần 7: Hiển thị tổng */}
      <div className="text-sm text-gray-700 mb-2">
        <strong>Tổng sản phẩm:</strong> {totalProducts} | <strong>Tổng tồn kho:</strong> {totalStock}
      </div>

      {/* Danh sách sản phẩm */}
      <table className="min-w-full bg-white border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border">Tên sản phẩm</th>
            <th className="py-2 px-4 border">Giá</th>
            <th className="py-2 px-4 border">Danh mục</th>
            <th className="py-2 px-4 border">Tồn kho</th>
            <th className="py-2 px-4 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} index={index} onDelete={handleDeleteProduct} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
