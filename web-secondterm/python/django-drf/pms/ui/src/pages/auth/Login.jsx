import React, { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from 'react-router'
import { InputField, SimpleButton } from "../../components/ComponentsLib";
import { useForm } from 'react-hook-form'
import { LGN_USER_API } from "../../utils/apis";
import axios from 'axios'
import toast from "react-hot-toast";
import useAuth from "../../store/useAuth.js";

const Login = () => {
  const login = useAuth((state) => state.login)

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  
  const loginUser = async (data) => {
    try {
      const response = await axios.post(LGN_USER_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        console.log(response.data)
        login(response.data.user, response.data.token)
        navigate('/', {replace: true})
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
          <h2 className="font-bold text-xl">Login</h2>
          <p className="text-[12px] text-gray-700 italic">Enter your credentials to access dashboard</p>
        </div>

        <form onSubmit={handleSubmit(loginUser)} className="my-4 reg-form">
          <div className="grid grid-cols-12 gap-3">
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
            <div className="flex justify-between items-center col-span-12">
              <SimpleButton 
                text="Login"
              />
              <Link to={"/auth/forgot-password"} className="text-blue-600 text-[14px] italic">Forgot password</Link>
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

export default Login;
