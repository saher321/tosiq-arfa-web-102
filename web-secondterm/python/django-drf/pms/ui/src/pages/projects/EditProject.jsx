
import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link, useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { UDT_CUSTOMER_API, EDT_CUSTOMER_API } from '../../utils/apis'
import toast from 'react-hot-toast'
import { LuArrowLeft, LuMoveLeft } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import { Divider, InputField, SimpleButton } from '../../components/ComponentsLib'

const EditProject = () => {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const getSingleCustomer = async () => {
        try {
            const response = await axios.get(`${EDT_CUSTOMER_API}/${params.id}`)
            if (response.data.status == true) {
                reset(response.data.customer)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }
    const handleUpdateCustomer = async (data) => {
        try {
            const response = await axios.put(UDT_CUSTOMER_API, data)
            console.log(response.data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate('/customers', { replace: true })
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    useEffect(() => {
        getSingleCustomer()
    }, [params.id])

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
                        Edit customer [#{params.id}]
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/customers'}>View all</Link>
                    </div>
                </div>
                <Divider />
                <div className='mt-5'>
                    <form onSubmit={handleSubmit(handleUpdateCustomer)}>
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
                                <SimpleButton text="Update customer"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default EditProject
