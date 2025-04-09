// update
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  const pages = [1, 2, 3, 4, "...", 10, 11];

  return (
    <div className="flex items-center justify-between mt-6 px-2">
      <p className="text-sm text-gray-500">63 results</p>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-pink-500 rounded-full hover:bg-gray-100 transition">
          <ChevronLeft size={18} />
        </button>
        {pages.map((page, i) => (
          <button
            key={i}
            className={`w-8 h-8 flex items-center justify-center text-sm rounded-full transition ${
              page === 1
                ? "bg-pink-500 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-pink-500"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-pink-500 rounded-full hover:bg-gray-100 transition">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// export default function Pagination() {
//   const pages = [1, 2, 3, 4, "...", 10, 11];

//   return (
//     <div className="flex items-center justify-between mt-6">
//       <p className="text-sm text-gray-500">63 results</p>
//       <div className="flex items-center space-x-2">
//         <button className="text-gray-400 hover:text-pink-500">&lt;</button>
//         {pages.map((page, i) => (
//           <button
//             key={i}
//             className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
//               page === 1
//                 ? "bg-pink-500 text-white"
//                 : "text-gray-500 hover:bg-gray-200"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//         <button className="text-gray-400 hover:text-pink-500">&gt;</button>
//       </div>
//     </div>
//   );
// }
