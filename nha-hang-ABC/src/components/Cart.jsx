// import { useContext } from 'react';
// import { OrderContext } from '../context/OrderContext';

// function Cart({ onClose }) {
//   const { cart, removeFromCart, updateQuantity, totalPrice } =
//     useContext(OrderContext);

//   if (cart.length === 0) {
//     return (
//       <div>
//         <p className="text-center my-3">Giỏ hàng trống!</p>
//         <div className="text-end">
//           <button className="btn btn-secondary" onClick={onClose}>
//             Đóng
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Món ăn</th>
//               <th>Giá</th>
//               <th>Số lượng</th>
//               <th>Tổng</th>
//               <th>Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>${item.price}</td>
//                 <td>
//                   <div className="d-flex align-items-center gap-2">
//                     <button
//                       className="btn btn-sm btn-outline-secondary"
//                       onClick={() => updateQuantity(item.id, -1)}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       className="btn btn-sm btn-outline-secondary"
//                       onClick={() => updateQuantity(item.id, 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td>${(item.price * item.quantity).toFixed(2)}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="text-end">
//         <h4>Tổng tiền: ${totalPrice.toFixed(2)}</h4>
//         <button className="btn btn-secondary mt-3" onClick={onClose}>
//           Đóng
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function Cart({ onClose }) {
  const { cart, removeFromCart, updateQuantity, totalPrice } =
    useContext(OrderContext);

  if (cart.length === 0) {
    return (
      <div>
        <p className="text-center my-3">Giỏ hàng trống!</p>
        <div className="text-end">
          <button className="btn btn-secondary" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Món ăn</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <h4>Tổng tiền: ${totalPrice.toFixed(2)}</h4>
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}

export default Cart;