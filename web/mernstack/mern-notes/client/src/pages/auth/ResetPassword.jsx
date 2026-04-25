import React from 'react'
import AuthLayout from '../../layouts/AuthLayout.jsx'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { RESET_PASS_API } from '../../utils/apis.js'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const ResetPassword = () => {
  const { register, handleSubmit, reset, setValue } = useForm()
  const navigate = useNavigate()
  const resetPassword = async (data) => {
    try {
      let email = localStorage.getItem("forgotEmail")
      const newData = {
        email,
        otp: data.otp,
        newPassword: data.newPassword
      }
      const response = await axios.post(RESET_PASS_API, newData)
      if (response.data.status == true){
        toast.success(response.data.message)
        navigate('/login')
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
          <h2 className=" font-semibold mb-2">Reset your password</h2>
          <form onSubmit={handleSubmit(resetPassword)}>
            <div>
              
              <div>
                <label>OTP code</label>
                <input type="number" {...register("otp")} className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter given otp" />
              </div>
              
              <div>
                <label>New password</label>
                <input type="password" {...register("newPassword")} className="w-full block my-3 p-2 rounded-lg border border-gray-300 bg-gray-100" placeholder="Enter new password" autoComplete='off' />
              </div>
            </div>

            <div className="flex gap-2">
              <button type='submit' className="w-1/2 p-2 text-sm bg-green-900 text-white rounded-lg shadow">
                Reset new password
              </button>
            </div>
          </form>
        </div>
    </AuthLayout>
  )
}

export default ResetPassword
