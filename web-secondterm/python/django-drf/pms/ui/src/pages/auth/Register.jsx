import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'

const Register = () => {
  return (
    <AuthLayout>
        <div className='my-5 grid place-items-center'>
            <div className='text-center'>
                <h2>
                    Register
                </h2>
                <p>Create your account to access dashboard</p>
            </div>

            <div>
                <form className='reg-form grid grid-cols-12 gap-3'>
                    <div className='col-span-6'>
                        <label>Full name</label>
                        <input type='text' placeholder='e.g John doe'/>
                    </div>
                    <div className='col-span-6'>
                        <label>Username</label>
                        <input type='text' placeholder='e.g johndoe'/>
                    </div>
                    <div className='col-span-12'>
                        <label>Email</label>
                        <input type='email' placeholder='e.g johndoe@email.com'/>
                    </div>
                    <div className='col-span-12'>
                        <label>Password</label>
                        <input type='password' placeholder='*********'/>
                    </div>
                    <div className='col-span-12'>
                        <button>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Register