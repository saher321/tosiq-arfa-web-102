
import React, { useState } from 'react';
import WebLayout from '../layout/WebLayout';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router';
const AddCustomer = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const handleAddCustomer = async (data) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/customers/add", data)
        if (response.data.status == true) {
            console.log(response.data.message)
            navigate('/customers', {replace: true})
        } else {
            console.log(response.data.message)
        }
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <WebLayout>
      <div className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Add Customer
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Enter the customer's information below.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit(handleAddCustomer)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                {...register("name")}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                {...register("email")}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                {...register("phone")}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+92 300 1234567"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

                <button
                  type="submit"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default AddCustomer;
