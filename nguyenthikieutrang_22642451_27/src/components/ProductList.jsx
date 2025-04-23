const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([
      { name: 'Sản phẩm 1', price: 100000, category: 'Công nghệ', stock: 20 },
      { name: 'Sản phẩm 2', price: 200000, category: 'Thời trang', stock: 15 },
    ]);
  
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td><button onClick={() => deleteProduct(index)}>XOÁ</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  