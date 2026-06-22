export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4 px-10 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900">Student Dashboard</h2>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
          M
        </div>
        <span className="text-sm font-medium text-gray-700">User</span>
      </div>
    </header>
  );
}
