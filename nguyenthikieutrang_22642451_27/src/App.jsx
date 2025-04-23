
import { useState } from 'react';

const initialProducts = [
  { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", stock: 20 },
  { id: 2, name: "Tai nghe", price: 350000, category: "Công nghệ", stock: 10 },
  { id: 3, name: "Nồi cơm", price: 500000, category: "Gia dụng", stock: 22 },
];

function App() {
  const [products] = useState(initialProducts);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}đ - {p.category} - Tồn kho: {p.stock}
            <button>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
