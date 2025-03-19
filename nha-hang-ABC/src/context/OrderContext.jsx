// import { createContext, useState } from 'react';
// import { toast } from 'react-toastify';

// export const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       setCart(
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//     toast.success(`${item.name} đã được thêm vào giỏ hàng!`, {
//       autoClose: 2000, // Tự đóng sau 2 giây, thư viện react-toastify
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCart(cart.filter((item) => item.id !== itemId));
//   };

//   const updateQuantity = (itemId, delta) => {
//     setCart(
//       cart.map((item) =>
//         item.id === itemId
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <OrderContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [bookings, setBookings] = useState(() => {
    // Khởi tạo bookings từ localStorage nếu có
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // Đồng bộ bookings với localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Thêm món vào giỏ hàng
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast.success(`${item.name} đã được thêm vào giỏ hàng!`, {
      autoClose: 2000,
    });
  };

  // Xóa món khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Tăng/giảm số lượng
  const updateQuantity = (itemId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Làm sạch giỏ hàng
  const clearCart = () => {
    setCart([]);
  };

  // Thêm đơn đặt bàn
  const addBooking = (booking, cartItems) => {
    const newBooking = {
      id: Date.now(),
      ...booking,
      items: [...cartItems],
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      timestamp: new Date().toISOString(),
    };
    setBookings([...bookings, newBooking]);
    toast.success('Đặt bàn thành công!', { autoClose: 2000 });
  };

  // Tính tổng tiền giỏ hàng
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        bookings, // Đảm bảo bookings được truyền vào đây
        addBooking, // Đảm bảo addBooking được truyền vào đây
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};