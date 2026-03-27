import React from 'react'
import WebLayout from '../../layouts/WebLayout'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { SAVE_DEPT_API } from '../../utils/APIS'
const AddDepartment = () => {

    const { register, handleSubmit, reset } = useForm()

    const handleSaveDept = async (data) => {
        try {
            const response = await axios.post(SAVE_DEPT_API, data)
            if (response.data.status == true){
                toast.success(response.data.message)
                reset();
            }else {
                toast.error(response.data.message)
            }

        } catch (error) {
            
        }
    }
  return (
    <WebLayout>

        <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700">Add new department</h2>
        </div>
        <div className="px-6 py-4 text-sm">
            <form onSubmit={handleSubmit(handleSaveDept)}>
                <div>
                    <label htmlFor="">Name</label>
                </div>
                <div className='max-w-xs mt-2 mb-4'>
                    <input {...register("deptName")} className='w-full border-2 rounded px-2 py-1 focus:outline-indigo-600 border-zinc-300' type="text" placeholder='Enter dept. name' />
                </div>
                <div>
                    <button className='p-2 bg-indigo-600 text-gray-100 rounded hover:shadow'>Save Department</button>
                </div>
            </form>
        </div>
    </WebLayout>
  )
}

export default AddDepartment
