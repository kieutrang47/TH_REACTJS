// function Contact() {
//   return (
//     <div className="py-5 bg-light">
//       <div className="container">
//         <h1 className="text-center fw-bold mb-5">Liên hệ với chúng tôi</h1>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card shadow p-4">
//               <p className="mb-2">
//                 <strong>Email:</strong> 22642451KieuTrang@restaurant.com
//               </p>
//               <p className="mb-2">
//                 <strong>Phone:</strong> 0123-456-789
//               </p>
//               <p className="mb-0">
//                 <strong>Địa chỉ:</strong> 12 Nguyễn Văn Bảo Gò Vấp Thành phố Hồ Chí Minh
//               </p>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function Contact() {
  const { bookings } = useContext(OrderContext); // Lấy bookings từ OrderContext

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Liên hệ với chúng tôi</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <p className="mb-2">
                <strong>Email:</strong> abc@restaurant.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> 0123-456-789
              </p>
              <p className="mb-0">
                <strong>Địa chỉ:</strong> 12 Nguyễn Văn Bảo Gò Vấp, TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        {/* Hiển thị danh sách đặt bàn */}
        <div className="mt-5">
          <h2 className="fw-bold mb-4">Danh sách đặt bàn</h2>
          {bookings.length === 0 ? (
            <p>Chưa có đơn đặt bàn nào.</p>
          ) : (
            <div className="row">
              {bookings.map((booking) => (
                <div key={booking.id} className="col-md-6 mb-4">
                  <div className="card shadow-sm p-3">
                    <h5 className="fw-bold">{booking.name}</h5>
                    <p>
                      <strong>SĐT:</strong> {booking.phone}
                    </p>
                    <p>
                      <strong>Ngày:</strong> {booking.date} - {booking.time}
                    </p>
                    {booking.items.length > 0 && (
                      <>
                        <p className="fw-bold">Đơn hàng:</p>
                        <ul className="list-group mb-3">
                          {booking.items.map((item) => (
                            <li
                              key={item.id}
                              className="list-group-item d-flex justify-content-between"
                            >
                              <span>{item.name} (x{item.quantity})</span>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          <strong>Tổng tiền:</strong> ${booking.total.toFixed(2)}
                        </p>
                      </>
                    )}
                    <p className="text-muted">
                      <strong>Thời gian đặt:</strong>{' '}
                      {new Date(booking.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;