
import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Customers", url: "/customers" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
        <div className="flex items-center gap-2 rounded-full bg-gray-50 p-1">
          {links.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              end={link.url === "/"}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
