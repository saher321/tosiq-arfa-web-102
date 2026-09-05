
import React from "react";
import { NavLink } from "react-router";
import { APP_NAME_UC } from '../utils/strings.js'
const RoleBasedLayout = ({ children }) => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Customers", path: "/customers" },
    { name: "Projects", path: "/projects" },
    { name: "Employees", path: "/employee" },
    { name: "Task", path: "/tasks" },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Topbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-md">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            {APP_NAME_UC}
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <button className="relative text-gray-600 hover:text-blue-600">
              🔔
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 font-semibold text-white bg-blue-600 rounded-full">
                A
              </div>

              <span className="font-medium text-gray-700">
                Admin
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 z-40 w-64 bg-white shadow-md">
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-16 ml-64 min-h-screen bg-gray-200">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RoleBasedLayout;
