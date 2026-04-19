import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { REGISTER_API } from '../../utils/apis.js'
import toast from 'react-hot-toast'

const Register = () => {
  const { register, handleSubmit, reset, setValue } = useForm()

  const registerUser = async (data) => {
    try {
      const response = await axios.post(REGISTER_API, data)
      if (response.data.status == true){
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }
  return (
    <AuthLayout>
      <div className="w-[350px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm max-w-lg rounded-lg border border-gray-200 overflow-hidden shadow bg-white p-4">
          <h2 className=" font-semibold mb-2">Register to continue</h2>
          <form onSubmit={handleSubmit(registerUser)}>
            <div>
              <div>
                <label>Name</label>
                <input type="text" {...register("name")} className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter name" />
              </div>
              
              <div>
                <label>Email</label>
                <input type="email" {...register("email")} className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter email" />
              </div>
              
              <div>
                <label>Password</label>
                <input type="password" {...register("password")} className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter password" />
              </div>
            </div>

            <div className="flex gap-2">
              <button type='submit' className="w-1/3 p-2 text-sm bg-green-900 text-white rounded-lg shadow">
                Register
              </button>
            </div>
          </form>
        </div>
    </AuthLayout>
  )
}

export default Register
