import Search from "../assets/Lab_05/Search.png";
import Bell from "../assets/Lab_05/Bell 1.png";
import q1 from "../assets/Lab_05/Question 1.png";
import a313 from "../assets/Lab_05/Avatar 313.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b p-6 bg-white">
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold text-pink-400">DASHBOARD👋</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-lg w-72 pl-10 bg-white" // Added pl-10 to create space for the icon
          />
          <img
            src={Search}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <img src={Bell} alt="Bell" className="w-6 h-6" />
        <img src={q1} alt="Help" className="w-6 h-6" />
        <img src={a313} alt="Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}
