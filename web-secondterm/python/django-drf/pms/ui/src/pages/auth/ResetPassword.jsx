import React, { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from 'react-router'
import { InputField, SimpleButton } from "../../components/ComponentsLib";
import { useForm } from 'react-hook-form'
import { LGN_USER_API, RP_USER_API } from "../../utils/apis";
import axios from 'axios'
import toast from "react-hot-toast";
import useAuth from "../../store/useAuth.js";

const ResetPassword = () => {
  const userForgotEmail = useAuth((state) => state.userForgotEmail)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  
  const resetPassword = async (data) => {
    try {
      const newData = {
        userForgotEmail,
        otp: data.otp,
        newPassword: data.newPassword
      }
      const response = await axios.post(RP_USER_API, newData)
      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate('/auth/login', {replace: true})
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Internal server error")
      throw new Error(error)
    }
  }

  return (
    <AuthLayout>
      <div className="my-5 mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="font-bold text-xl">Reset password</h2>
          <p className="text-[12px] text-gray-700 italic">Enter otp, new password for reset password</p>
        </div>

        <form onSubmit={handleSubmit(resetPassword)} className="my-4 reg-form">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <label>OTP</label>
              <InputField {...register('otp')}
               type="text" hint="123456" />
            </div>
            <div className="col-span-12">
              <label>New password</label>
              <InputField {...register('newPassword')}
               type="password" hint="*********" />
            </div>
            <div className="flex justify-between items-center col-span-12">
              <SimpleButton 
                text="Reset password"
              />
            </div>
          </div>
        </form>
        <hr />
        <div>
          <span>Don't have an account? <Link className="text-blue-600 hover:underline" to="/auth/register">Register</Link> </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
