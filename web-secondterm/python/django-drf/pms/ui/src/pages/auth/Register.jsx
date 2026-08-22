import React, { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from 'react-router'
import { InputField, SimpleButton } from "../../components/ComponentsLib";
import { useForm } from 'react-hook-form'
import { REG_USER_API } from "../../utils/apis";
import axios from 'axios'
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm()
  
  const registerUser = async (data) => {
    try {
      const response = await axios.post(REG_USER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
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
      <div className="my-5 grid place-items-center">
        <div className="text-center">
          <h2 className="font-bold text-xl">Register</h2>
          <p className="text-[12px] text-gray-700 italic">Create your account to access dashboard</p>
        </div>

        <form onSubmit={handleSubmit(registerUser)} className="my-4 reg-form">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label>First name</label>
              <InputField {...register('first_name')}
               type="text" hint="e.g John doe" />
            </div>
            <div className="col-span-6">
              <label>Last name</label>
              <InputField {...register('last_name')}
               type="text" hint="e.g John doe" />
            </div>
            <div className="col-span-12">
              <label>Username</label>
              <InputField {...register('username')}
               type="text" hint="e.g johndoe" />
            </div>
            <div className="col-span-12">
              <label>Email</label>
              <InputField {...register('email')}
               type="email" hint="e.g johndoe@email.com" />
            </div>
            <div className="col-span-12">
              <label>Password</label>
              <InputField {...register('password')}
               type="password" hint="*********" />
            </div>
            <div className="col-span-12">
              <SimpleButton 
                text="Signup"
              />
            </div>
          </div>
        </form>
            <div>
                <span>Already have an account? <Link className="text-blue-600 hover:underline" to="#">Login</Link> </span>
            </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
