import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block p-2 hover:bg-blue-100 rounded">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/services" className="block p-2 hover:bg-blue-100 rounded">
            Services
          </Link>
        </li>
      </ul>
    </aside>
  );
}
