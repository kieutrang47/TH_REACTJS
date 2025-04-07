export default function StatusBadge({ status }) {
  const colors = {
    New: "bg-blue-100 text-blue-600",
    "In-progress": "bg-yellow-100 text-yellow-600",
    Completed: "bg-green-100 text-green-600",
  };

  return (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full ${colors[status]}`}
    >
      {status}
    </span>
  );
}
