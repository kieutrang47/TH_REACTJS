//thêm phần lưu trữ danh sách đã đặt 
import { useState, useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function BookTable() {
  const [showForm, setShowForm] = useState(false);
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });
  const { cart, totalPrice, clearCart, addBooking } = useContext(OrderContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!booking.name || !booking.phone || !booking.date || !booking.time) {
      alert('Vui lòng điền đầy đủ thông tin đặt bàn!');
      return;
    }

    // Lưu đơn đặt bàn và giỏ hàng
    addBooking(booking, cart);

    // Reset form và đóng modal
    setBooking({ name: '', phone: '', date: '', time: '' });
    clearCart();
    setShowForm(false);
  };

  return (
    <div>
      <button
        className="btn btn-danger fw-bold px-4 py-2"
        onClick={() => setShowForm(true)}
      >
        Book Table
      </button>

      {showForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center"
          style={{ zIndex: 1050 }}
        >
          <div className="card p-4" style={{ maxWidth: '400px' }}>
            <h5 className="card-title fw-bold mb-3">Đặt bàn</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={booking.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Số điện thoại</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={booking.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ngày</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={booking.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Giờ</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={booking.time}
                  onChange={handleInputChange}
                />
              </div>
              {cart.length > 0 && (
                <div className="mb-3">
                  <p className="fw-bold">Giỏ hàng hiện tại:</p>
                  <ul className="list-group">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between"
                      >
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 fw-bold">Tổng: ${totalPrice.toFixed(2)}</p>
                </div>
              )}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  Xác nhận
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookTable;

// import { useState, useContext } from 'react';
// import { OrderContext } from '../context/OrderContext';

// function BookTable() {
//   const [showForm, setShowForm] = useState(false);
//   const [booking, setBooking] = useState({
//     name: '',
//     phone: '',
//     date: '',
//     time: '',
//   });
//   const { cart, totalPrice, clearCart } = useContext(OrderContext); // Thêm clearCart

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBooking({ ...booking, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!booking.name || !booking.phone || !booking.date || !booking.time) {
//       alert('Vui lòng điền đầy đủ thông tin đặt bàn!');
//       return;
//     }

//     // Tạo thông báo đặt bàn
//     let message = `Đặt bàn thành công!\nTên: ${booking.name}\nSĐT: ${booking.phone}\nNgày: ${booking.date}\nGiờ: ${booking.time}`;

//     // Nếu có món trong giỏ hàng, thêm thông tin giỏ hàng
//     if (cart.length > 0) {
//       message += `\n\nĐơn hàng kèm theo:\n`;
//       cart.forEach((item) => {
//         message += `- ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toFixed(2)}\n`;
//       });
//       message += `Tổng tiền: $${totalPrice.toFixed(2)}`;
//     } else {
//       message += '\n\nKhông có món nào trong giỏ hàng.';
//     }

//     // Giả lập gửi dữ liệu đến server và hiển thị thông báo
//     alert(message);
//     setBooking({ name: '', phone: '', date: '', time: '' }); // Reset form đặt bàn
//     clearCart(); // Làm sạch giỏ hàng
//     setShowForm(false); // Đóng form
//   };

//   return (
//     <div>
//       <button
//         className="btn btn-danger fw-bold px-4 py-2"
//         onClick={() => setShowForm(true)}
//       >
//         Book Table
//       </button>

//       {showForm && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center"
//           style={{ zIndex: 1050 }}
//         >
//           <div className="card p-4" style={{ maxWidth: '400px' }}>
//             <h5 className="card-title fw-bold mb-3">Đặt bàn</h5>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Họ tên</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   value={booking.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Số điện thoại</label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   name="phone"
//                   value={booking.phone}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Ngày</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="date"
//                   value={booking.date}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Giờ</label>
//                 <input
//                   type="time"
//                   className="form-control"
//                   name="time"
//                   value={booking.time}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               {cart.length > 0 && (
//                 <div className="mb-3">
//                   <p className="fw-bold">Giỏ hàng hiện tại:</p>
//                   <ul className="list-group">
//                     {cart.map((item) => (
//                       <li
//                         key={item.id}
//                         className="list-group-item d-flex justify-content-between"
//                       >
//                         <span>{item.name} (x{item.quantity})</span>
//                         <span>${(item.price * item.quantity).toFixed(2)}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="mt-2 fw-bold">Tổng: ${totalPrice.toFixed(2)}</p>
//                 </div>
//               )}
//               <div className="d-flex gap-2">
//                 <button type="submit" className="btn btn-success">
//                   Xác nhận
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowForm(false)}
//                 >
//                   Hủy
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookTable;
