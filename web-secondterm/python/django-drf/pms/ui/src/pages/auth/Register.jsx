import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from 'react-router'
import { InputField, SimpleButton } from "../../components/ComponentsLib";

const Register = () => {
  return (
    <AuthLayout>
      <div className="my-5 grid place-items-center">
        <div className="text-center">
          <h2 className="font-bold text-xl">Register</h2>
          <p className="text-[12px] text-gray-700 italic">Create your account to access dashboard</p>
        </div>

        <form className="my-4 reg-form">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label>Full name</label>
              <InputField type="text" hint="e.g John doe" />
            </div>
            <div className="col-span-6">
              <label>Username</label>
              <InputField type="text" hint="e.g johndoe" />
            </div>
            <div className="col-span-12">
              <label>Email</label>
              <InputField type="email" hint="e.g johndoe@email.com" />
            </div>
            <div className="col-span-12">
              <label>Password</label>
              <InputField type="password" hint="*********" />
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
