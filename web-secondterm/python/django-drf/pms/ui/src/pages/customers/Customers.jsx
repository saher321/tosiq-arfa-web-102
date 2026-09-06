import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link } from 'react-router'
import { LuPencil, LuTrash2 } from 'react-icons/lu'

const Customers = () => {
    return (
        <RoleBasedLayout>
            <div>
                Filter
            </div>
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

                <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table class="w-full text-left text-sm text-gray-700">
                        <thead class="bg-blue-600 text-white">
                            <tr>
                                <th scope="col" class="px-6 py-4 font-semibold">Sr#</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Full Name</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Email</th>
                                <th scope="col" class="px-6 py-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="cursor-pointer bg-white hover:bg-gray-100 transition-colors">
                                <td class="px-6 py-4">1</td>
                                <td class="px-6 py-4 font-medium text-gray-900">John Doe</td>
                                <td class="px-6 py-4">john@example.com</td>
                                <td class="px-6 py-4">
                                    <div class="flex justify-center gap-2">
                                        <button
                                            class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                                            <LuPencil />
                                        </button>

                                        <button
                                            class="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition">
                                            <LuTrash2 />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers
