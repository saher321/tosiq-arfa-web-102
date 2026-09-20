import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { ADD_PROJECT_API, CUSTOMER_NAMES_API } from '../../utils/apis.js'
import toast from 'react-hot-toast'
import { LuArrowLeft, LuMoveLeft } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import { Divider, InputField, SelectInput, SimpleButton } from '../../components/ComponentsLib'
import { statuses } from '../../utils/common'

const AddProject = () => {

    const [ customers, setCustomers ] = useState([])
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const getCustomers = async () => { 
        try {
            const response = await axios.get(CUSTOMER_NAMES_API)
            if (response.data.status == true) {
                setCustomers(response.data.customers)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }
    const handleAddProject = async (data) => {
        try {
            const response = await axios.post(ADD_PROJECT_API, data)
            console.log(response.data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate('/projects')
            } else {
                toast.error(response.data.message)
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
                        Add new project
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/projects'}>View all</Link>
                    </div>
                </div>
                <Divider />
                <div className='mt-5'>
                    <form onSubmit={handleSubmit(handleAddProject)}>
                        <div className='grid grid-cols-12 gap-3'>
                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Title</label>
                                <InputField
                                { ...register('title') }
                                type="text"
                                hint="John doe"
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Customer</label>
                                <SelectInput
                                { ...register('customer') }
                                data={customers}
                                />
                            </div>
                            
                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Status</label>
                                <SelectInput
                                { ...register('status') }
                                data={statuses}
                                />
                            </div>

                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Start date</label>
                                <InputField
                                { ...register('start_date') }
                                type="date"
                                hint="1234"
                                />
                            
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Deadline</label>
                                <InputField
                                { ...register('dead_line') }
                                type="date"
                                hint="xyz"
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <label htmlFor="">Notes</label>
                                <InputField
                                { ...register('notes') }
                                type="text"
                                hint="type something"
                                />
                            </div>
                            <div className="col-span-12">
                                <SimpleButton text="Add project"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default AddProject
