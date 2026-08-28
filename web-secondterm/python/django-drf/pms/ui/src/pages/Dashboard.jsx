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