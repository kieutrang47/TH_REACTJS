// câu 10 - thêm hiệu ứng hover , chỉnh lại màu xíu
import useOverviewData from "../hooks/useOverviewData";

export default function OverviewCards() {
  const { turnover, profit, newCustomer } = useOverviewData();

  if (!turnover || !profit || !newCustomer) return <p>Loading...</p>;

  const cards = [
    {
      title: "Turnover",
      value: turnover.value,
      icon: turnover.img,
      change: `▲ ${turnover.percent}`,
      bg: "from-pink-100 to-pink-200",
    },
    {
      title: "Profit",
      value: profit.value,
      icon: profit.img,
      change: `▲ ${profit.percent}`,
      bg: "from-sky-100 to-sky-200",
    },
    {
      title: "New customer",
      value: newCustomer.value,
      icon: newCustomer.img,
      change: `▲ ${newCustomer.percent}`,
      bg: "from-purple-100 to-purple-200",
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <img
          src="src/assets/Lab_05/Squares four 1.png"
          alt="icon"
          className="w-5 h-5"
        />
        <h2 className="font-semibold text-2xl text-gray-800">Overview</h2>
        <span className="text-sm text-gray-500">📈</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden`}
          >
            <div className="absolute top-3 right-3 opacity-20">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>

            <h4 className="text-lg font-medium text-gray-600">{card.title}</h4>
            <h1 className="text-3xl font-bold text-gray-900">{card.value}</h1>

            <div className="flex items-center mt-3">
              <span className="text-green-600 font-semibold">
                {card.change}
              </span>
              <span className="ml-2 text-gray-500 text-sm">vs last month</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import useOverviewData from "../hooks/useOverviewData";

// export default function OverviewCards() {
//   const { turnover, profit, newCustomer } = useOverviewData();

//   if (!turnover || !profit || !newCustomer) return <p>Loading...</p>;

//   const cards = [
//     {
//       title: "Turnover",
//       value: turnover.value,
//       icon: turnover.img,
//       change: `▲ ${turnover.percent}`,
//       bg: "bg-pink-100",
//     },
//     {
//       title: "Profit",
//       value: profit.value,
//       icon: profit.img,
//       change: `▲ ${profit.percent}`,
//       bg: "bg-blue-100",
//     },
//     {
//       title: "New customer",
//       value: newCustomer.value,
//       icon: newCustomer.img,
//       change: `▲ ${newCustomer.percent}`,
//       bg: "bg-blue-100",
//     },
//   ];

//   return (
//     <div className="mt-6">
//       <div className="flex gap-x-2 mb-4">
//         <h2 className="font-bold text-xl">OVERVIEW</h2>
//       </div>

//       {/* hiển thị dữ liệu lấy từ hàm useOverviewCards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`${card.bg} rounded-md p-4 shadow-sm relative`}
//           >
//             <div className="absolute top-2 right-2">
//               <img src={card.icon} alt={card.title} />
//             </div>
//             <h4 className="font-bold text-lg">{card.title}</h4>
//             <h1 className="text-2xl font-bold">{card.value}</h1>
//             <div className="flex items-center mt-2">
//               <h3 className="text-green-600">{card.change}</h3>
//               <h3 className="text-gray-700 ms-2">Period of change</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//older khi chua dung api
// import buy from "../assets/Lab_05/Button 1509.png";
// import money from "../assets/Lab_05/Button 1529.png";
// import account from "../assets/Lab_05/Button 1530.png";

// export default function OverviewCards() {
//   const cards = [
//     {
//       title: "Turnover",
//       value: "$92.405",
//       icon: buy,
//       change: "▲ 5.39%",
//       bg: "bg-pink-100",
//     },
//     {
//       title: "Profit",
//       value: "$32.405",
//       icon: money,
//       change: "▲ 5.39%",
//       bg: "bg-blue-100",
//     },
//     {
//       title: "New customer",
//       value: "289",
//       icon: account,
//       change: "▲ 6.39%",
//       bg: "bg-blue-100",
//     },
//   ];

//   return (
//     <div className="mt-6">
//       <div className="flex gap-x-2 mb-4">
//         <h2 className="font-bold text-xl">OVERVIEW</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`${card.bg} rounded-md p-4 shadow-sm relative`}
//           >
//             <div className="absolute top-2 right-2">
//               <img src={card.icon} alt="" />
//             </div>
//             <h4 className="font-bold text-lg">{card.title}</h4>
//             <h1 className="text-2xl font-bold">{card.value}</h1>
//             <div className="flex items-center mt-2">
//               <h3 className="text-green-600">{card.change}</h3>
//               <h3 className="text-gray-700 ms-2">Period of change</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
