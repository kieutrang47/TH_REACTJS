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
      bg: "bg-pink-100",
    },
    {
      title: "Profit",
      value: profit.value,
      icon: profit.img,
      change: `▲ ${profit.percent}`,
      bg: "bg-blue-100",
    },
    {
      title: "New customer",
      value: newCustomer.value,
      icon: newCustomer.img,
      change: `▲ ${newCustomer.percent}`,
      bg: "bg-blue-100",
    },
  ];

  return (
    <div className="mt-6">
      <div className="flex gap-x-2 mb-4">
        <h2 className="font-bold text-xl">OVERVIEW</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-md p-4 shadow-sm relative`}
          >
            <div className="absolute top-2 right-2">
              <img src={card.icon} alt={card.title} />
            </div>
            <h4 className="font-bold text-lg">{card.title}</h4>
            <h1 className="text-2xl font-bold">{card.value}</h1>
            <div className="flex items-center mt-2">
              <h3 className="text-green-600">{card.change}</h3>
              <h3 className="text-gray-700 ms-2">Period of change</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
