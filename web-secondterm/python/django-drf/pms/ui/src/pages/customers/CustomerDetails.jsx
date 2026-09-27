import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link, useParams } from 'react-router'
import { LuMoveLeft } from 'react-icons/lu'
import { Divider } from '../../components/ComponentsLib'

const CustomerDetails = () => {
    const params = useParams()
    return (
        <RoleBasedLayout>
            <div className='mb-5'>
                <Link to={'/customers'} className=' flex items-center gap-2 text-blue-600'>
                    <LuMoveLeft className='mt-[1px]' />
                    <span>
                        Go back
                    </span>
                </Link>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md'>
                <div className='mb-5 flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        Customer details [{params.id}]
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/customers'}>View all</Link>
                    </div>
                </div>
                <Divider />
                <div className='mt-5'>
                    Customer information
                </div>
            </div>

            
            <div className='my-5 bg-white p-5 rounded-lg shadow-md'>
                <div className='mb-5 flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        Projects
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/projects'}>View all</Link>
                    </div>
                </div>
                <Divider />
                <div className='mt-5'>
                    project cards
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default CustomerDetails
