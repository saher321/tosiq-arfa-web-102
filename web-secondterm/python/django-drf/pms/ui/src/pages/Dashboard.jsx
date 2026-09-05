import React from 'react'
import useAuth from '../store/useAuth.js'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const Dashboard = () => {

    const user = useAuth((state) => state.user)
    const logout = useAuth((state) => state.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        toast.success("Logout successfully")
        navigate("/auth/login", { replace: true })
    }

    return (
        <div>
            <div>
                {user?.role == 'pm' ? 
                <>
                <span className="p-1 text-[12px] font-bold rounded-full bg-green-200 text-green-600 border border-green-600">Project Manager</span>
                </> :
                <>
                <span className="p-1 text-[12px] font-bold rounded-full bg-gray-200 text-gray-600 border border-gray-600">Employee</span>
                </>
                }
            </div>
            Dashboard {user?.email ?? "no email"}
            <div>
                <button className='bg-red-500 text-white py-1 px-3 rounded m-3' onClick={handleLogout}>
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Dashboard