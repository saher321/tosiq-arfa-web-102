import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout';
import axios from 'axios'
import { All_DEPT_API } from '../../utils/APIS';
import toast from 'react-hot-toast'
import moment from 'moment'

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

    return (
        <WebLayout>

            <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700">Departments</h2>
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
                                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                                        View
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