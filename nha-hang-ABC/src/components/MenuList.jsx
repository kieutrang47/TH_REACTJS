import { useState, useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function MenuList({ menuItems }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useContext(OrderContext);

  return (
    <div className="container my-5">
      {/* Danh sách món ăn */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {menuItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100 shadow-sm transition-transform hover-scale">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{
                  height: '200px', // Chiều cao cố định
                  objectFit: 'cover', // Giữ tỉ lệ ảnh
                  borderTopLeftRadius: '0.25rem', // Bo góc đồng bộ với card
                  borderTopRightRadius: '0.25rem',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-truncate">{item.name}</h5>
                <p className="card-text text-success fw-semibold mb-2">
                  ${item.price.toFixed(2)}
                </p>
                <p
                  className="card-text text-muted flex-grow-1"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // Giới hạn 2 dòng
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.description}
                </p>
                <div className="mt-auto d-flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-primary btn-sm flex-grow-1"
                  >
                    Thêm vào giỏ
                  </button>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="btn btn-outline-secondary btn-sm flex-grow-1"
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chi tiết món ăn */}
      {selectedItem && (
        <div className="mt-4 p-4 bg-light rounded shadow">
          <h3 className="fw-bold mb-3">{selectedItem.name}</h3>
          <p className="text-muted">{selectedItem.detailedDescription}</p>
          <button
            onClick={() => setSelectedItem(null)}
            className="btn btn-danger"
          >
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuList;