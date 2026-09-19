import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link } from 'react-router'
import { LuPencil, LuTrash2 } from 'react-icons/lu'
import axios from 'axios'
import { CUSTOMERS_API, DEL_CUSTOMER_API } from '../../utils/apis'
import toast from 'react-hot-toast'

const Customers = () => {
    const [clients, setClients] = useState([])

    const getCustomers = async () => {
        try {
            const res = await axios.get(CUSTOMERS_API)
            if (res.data.status == true) {
                setClients(res.data.customers)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    const handleDeleteCustomer = async (id) => {
        if (!id) {
            toast.error("ID not found")
            return;
        }
        try {
            const res = await axios.delete(`${DEL_CUSTOMER_API}/${id}/`)
            if (res.data.status == true) {
                toast.success(res.data.message)
                setClients(res.data.customers)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    useEffect(() => {
        getCustomers()
    }, [])
    return (
        <RoleBasedLayout>
            <div className='bg-white p-5 rounded-lg shadow-md'>
                <div className='mb-5 flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        Customers
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/customers/add'}>Add new</Link>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-sm text-gray-700">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">Sr#</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Full Name</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Email</th>
                                <th scope="col" className="px-6 py-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                clients.map((customer, i) => {
                                    return (
                                        <tr key={i} className="cursor-pointer bg-white hover:bg-gray-100 transition-colors">
                                            <td className="px-6 py-4">{i + 1}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900">{customer.full_name}</td>
                                            <td className="px-6 py-4">{customer.email}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        to={`/customers/edit/${customer.id}`}
                                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                                                        <LuPencil />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDeleteCustomer(customer.id)}
                                                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition">
                                                        <LuTrash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers
