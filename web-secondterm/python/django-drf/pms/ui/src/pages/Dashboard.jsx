import React from 'react'
import useAuth from '../store/useAuth.js'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import RoleBasedLayout from '../layouts/RoleBasedLayout.jsx'

const Dashboard = () => {

    const user = useAuth((state) => state.user)
    

    return (
        <RoleBasedLayout>
            <div className='bg-white p-5 rounded-lg shadow-md'>
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
                <span className='font-bold my-5 text-[28px] block'>
                    Welcome Back, {user?.first_name + " " + user?.last_name ?? "no email"}
                </span>
            
            </div>
        </RoleBasedLayout>
    )
}

export default Dashboard