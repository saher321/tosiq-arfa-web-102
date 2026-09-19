import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { ADD_CUSTOMER_API } from '../../utils/apis'
import toast from 'react-hot-toast'
import { LuArrowLeft, LuMoveLeft } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import { Divider, InputField, SimpleButton } from '../../components/ComponentsLib'

const AddProject = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const handleAddProject = async (data) => {
        try {
            const res = await axios.post(ADD_CUSTOMER_API, data)
            if (res.data.status == true) {
                toast.success(res.data.message)
                navigate('/customers')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

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
                        Add new customer
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/customers'}>View all</Link>
                    </div>
                </div>
                <Divider />
                <div className='mt-5'>
                    <form onSubmit={handleSubmit(handleAddProject)}>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className="col-span-6">
                                <label htmlFor="">Full name</label>
                                <InputField
                                { ...register('full_name') }
                                type="text"
                                hint="John doe"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Email</label>
                                <InputField
                                { ...register('email') }
                                type="email"
                                hint="john@email"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Phone</label>
                                <InputField
                                { ...register('phone') }
                                type="text"
                                hint="1234"
                                />
                            
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="">Address</label>
                                <InputField
                                { ...register('address') }
                                type="text"
                                hint="xyz"
                                />
                            </div>
                            <div className="col-span-12">
                                <SimpleButton text="Add customer"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default AddProject
