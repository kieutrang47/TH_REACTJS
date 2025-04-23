import React from 'react';
import ProductItem from './components/ProductItem';

const sampleProducts = [
  { id: 1, name: 'Áo thun', price: 150000, category: 'Thời trang', stock: 20 },
  { id: 2, name: 'Tai nghe Bluetooth', price: 500000, category: 'Công nghệ', stock: 10 },
];

function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Danh sách sản phẩm</h1>
      {sampleProducts.map((p) => (
        <ProductItem key={p.id} product={p} onDelete={() => {}} />
      ))}
    </div>
  );
}

export default App;
