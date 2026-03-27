import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout';
import axios from 'axios'
import { All_DEPT_API, DEL_DEPT_API } from '../../utils/APIS';
import toast from 'react-hot-toast'
import moment from 'moment'
import { Link } from 'react-router';

const DepartmentList = () => {

    const [ departments, setDepartments ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const getDepartments = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(All_DEPT_API)
            if (response.data && response.data.departments) {
                setDepartments(response.data.departments)
                setIsLoading(false)
            } else {
                toast.error('Failed to fetch departments!')
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error('Server error!')
            console.log("ERR: ", error)
        }
    }

    useEffect(() => {
        getDepartments()
    }, [])

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const response = await axios.get(DEL_DEPT_API + "/" + id + "/delete")
            if (response.data.status == true) {
                toast.success(response.data.message)
                await getDepartments()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error('Server error!')
        }
    }

    return (
        <WebLayout>

            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700">Departments</h2>
                <Link to={'/departments/create'} className="p-2 bg-indigo-600 text-gray-100 rounded hover:shadow">Add department</Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">

                    <thead className="text-gray-500 bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-medium">Dept. ID</th>
                            <th className="px-6 py-3 font-medium">Name</th>
                            <th className="px-6 py-3 font-medium">Created at</th>
                            <th className="px-6 py-3 font-medium">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {departments.map((dept) => (
                            <tr
                                key={dept.id}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 text-gray-700">{dept.id}</td>
                                <td className="px-6 py-4 text-gray-700">{dept.name}</td>
                                <td className="px-6 py-4 text-gray-500">{moment(dept.created_at).format('lll')}</td>
                                <td className="px-6 py-4">
                                    <button className="cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                                        View
                                    </button>
                                    <span> | </span>
                                    <button onClick={(e) => handleDelete(e, dept.id)} className="cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </WebLayout>
    )
}

export default DepartmentList

// react-router
// react-hot-toast
// react-hook-form
// axios