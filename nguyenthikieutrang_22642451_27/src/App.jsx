import { useState, useEffect } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved
      ? JSON.parse(saved)
      : [
          { name: 'Áo thun', price: 120000, category: 'Thời trang', stock: 10 },
          { name: 'Laptop Dell', price: 15000000, category: 'Công nghệ', stock: 5 },
          { name: 'Máy xay sinh tố', price: 700000, category: 'Gia dụng', stock: 3 },
        ];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    if (
      newProduct.name.trim() &&
      !isNaN(newProduct.price) &&
      newProduct.category.trim() &&
      !isNaN(newProduct.stock)
    ) {
      setProducts([
        ...products,
        {
          ...newProduct,
          price: parseFloat(newProduct.price),
          stock: parseInt(newProduct.stock),
        },
      ]);
      setNewProduct({ name: '', price: '', category: '', stock: '' });
    } else {
      alert('Vui lòng nhập đầy đủ và hợp lệ!');
    }
  };

  const handleDelete = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const filteredProducts = products.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filterCategory ? p.category === filterCategory : true;
    return nameMatch && categoryMatch;
  });

  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>

      <div className="controls">
        <input
          placeholder="Tìm theo tên"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Tất cả danh mục</option>
          <option value="Thời trang">Thời trang</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Gia dụng">Gia dụng</option>
        </select>
      </div>

      <div className="add-form">
        <input
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          placeholder="Danh mục"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Tồn kho"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>

      <div className="summary">
        <strong>Tổng sản phẩm:</strong> {filteredProducts.length} |{' '}
        <strong>Tổng tồn kho:</strong> {totalStock}
      </div>

      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p, index) => (
            <ProductItem
              key={index}
              product={p}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
//commit9