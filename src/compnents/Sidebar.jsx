import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 space-y-6">
      <h2 className="text-2xl font-bold">MyDashboard</h2>

      <nav className="flex flex-col space-y-4 mt-10">
        <Link className="hover:text-blue-400" to="/">
          Dashboard
        </Link>
        <Link className="hover:text-blue-400" to="/users">
          Users
        </Link>
        <Link className="hover:text-blue-400" to="/reports">
          Reports
        </Link>
        <Link className="hover:text-blue-400" to="/settings">
          Settings
        </Link>
        <Link className="hover:text-blue-400" to="/support">
          Support
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
