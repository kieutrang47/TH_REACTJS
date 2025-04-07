export default function TestTailwind() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">🎉 Tailwind đang hoạt động!</h1>
      <p className="text-lg mb-6">
        Nếu bạn thấy màu nền gradient và chữ màu trắng, thì Tailwind đã hoạt
        động OK rồi.
      </p>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-100 transition">
        Nhấn thử nè
      </button>
    </div>
  );
}
