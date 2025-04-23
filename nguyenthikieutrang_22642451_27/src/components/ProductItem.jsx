import React from 'react';

const ProductList = () => {
  const products = [
    { name: 'Sản phẩm 1', price: 100000, category: 'Công nghệ', stock: 20 },
    { name: 'Sản phẩm 2', price: 200000, category: 'Thời trang', stock: 15 },
    // thêm sản phẩm mẫu ở đây
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td><button>XOÁ</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
