
import { NavLink, useNavigate } from "react-router";
import { APP_NAME_UC } from '../utils/strings.js'
import toast from "react-hot-toast";
import useAuth from "../store/useAuth.js";
import { LuBriefcase, LuHouse, LuListTodo, LuLogOut, LuUsers, LuUsersRound } from "react-icons/lu";

const RoleBasedLayout = ({ children }) => {

  const user = useAuth((state) => state.user)
  const logout = useAuth((state) => state.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
      logout()
      toast.success("Logout successfully")
      navigate("/auth/login", { replace: true })
    }
    
  const menuItems = [
    { icon: <LuHouse />, name: "Dashboard", path: "/" },
    { icon: <LuUsersRound />, name: "Customers", path: "/customers" },
    { icon: <LuBriefcase />, name: "Projects", path: "/projects" },
    { icon: <LuUsers />, name: "Employees", path: "/employee" },
    { icon: <LuListTodo />, name: "Tasks", path: "/tasks" },
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

            <div className="flex items-center gap-2">

              <span className="text-gray-600 bg-gray-200 py-1 px-3 rounded-full font-bold text-[11px] text-gray-700">
                {user?.email}
              </span>
              <div>
                <button className='cursor-pointer hover:shadow-md flex items-center justify-center w-9 h-9 font-semibold text-gray-600 bg-gray-200 hover:text-white hover:bg-red-600 rounded-full' onClick={handleLogout}>
                  <LuLogOut title="Logout from account" />
                </button>
              </div>
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
              <div className="flex gap-2 items-center">
                <span>
                  {item.icon}
                </span>
                <span>
                  {item.name}
                </span>
              </div>
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
