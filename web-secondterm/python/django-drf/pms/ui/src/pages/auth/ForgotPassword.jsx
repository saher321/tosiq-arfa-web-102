import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from 'react-router'
import { InputField, SimpleButton } from "../../components/ComponentsLib";
import { useForm } from 'react-hook-form'
import { FP_USER_API } from "../../utils/apis";
import axios from 'axios'
import toast from "react-hot-toast";
import useAuth from "../../store/useAuth.js";

const ForogotPassword = () => {
  const forgotEmail = useAuth((state) => state.forgotEmail)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  
  const forogtPassword = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(FP_USER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        console.log(response.data)
        forgotEmail(data.email)
        navigate('/auth/reset-password', {replace: true})
        setLoading(false)
      } else {
        setLoading(false)
        toast.error(response.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error("Internal server error")
      throw new Error(error)
    }
  }

  return (
    <AuthLayout>
      <div className="my-5 mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="font-bold text-xl">Forgot password</h2>
          <p className="text-[12px] text-gray-700 italic">Lost your password, dont worry</p>
        </div>

        <form onSubmit={handleSubmit(forogtPassword)} className="my-4 reg-form">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <label>Email</label>
              <InputField {...register('email')}
               type="email" hint="e.g johndoe@email.com" />
            </div>
            <div className="flex justify-between items-center col-span-12">
              <SimpleButton 
                disabled={loading}
                text={loading ? 'OTP is sending...' : 'Send OTP'}
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

export default ForogotPassword;
