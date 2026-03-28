import React, { useEffect } from 'react'
import WebLayout from '../../layouts/WebLayout'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { EDIT_DEPT_API, UPDATE_DEPT_API } from '../../utils/APIS'
import { useParams } from 'react-router'
const EditDepartment = () => {  

    const { register, handleSubmit, setValue, reset } = useForm()
    const params = useParams();

    const getSingleDept = async () => {
        try {
            const response = await axios.get(`${EDIT_DEPT_API}/${params.id}/edit`)
            if (response.data.status == true) {
                console.log(response.data[0])
                setValue('deptName', response.data[0].name)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("ERR: ", error)
        }
    }

    useEffect( () => {
        getSingleDept()
    }, [params.id])

    const handleUpdateDept = async (data) => {
        try {
            let newData = {
                id: params.id,
                deptName: data.deptName
            }
            const response = await axios.post(UPDATE_DEPT_API, newData)
            if (response.data.status == true){
                toast.success(response.data.message)
            }else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log("ERR: ", error)
        }
    }
  return (
    <WebLayout>

        <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700">Edit department #{params.id}</h2>
        </div>
        <div className="px-6 py-4 text-sm">
            <form onSubmit={handleSubmit(handleUpdateDept)}>
                <div>
                    <label htmlFor="">Name</label>
                </div>
                <div className='max-w-xs mt-2 mb-4'>
                    <input {...register("deptName")} className='w-full border-2 rounded px-2 py-1 focus:outline-indigo-600 border-zinc-300' type="text" placeholder='Enter dept. name' />
                </div>
                <div>
                    <button className='p-2 bg-indigo-600 text-gray-100 rounded hover:shadow'>Update Department</button>
                </div>
            </form>
        </div>
    </WebLayout>
  )
}

export default EditDepartment
