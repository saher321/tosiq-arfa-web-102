import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WebLayout from '../layout/WebLayout'
import { Link } from 'react-router'

const CUSTOMER_API_URL = 'http://127.0.0.1:8000/customers'
const DEL_CUS_API_URL = 'http://127.0.0.1:8000/customers/delete'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  const fetchCustomers = async () => {
      try {
        const res = await axios.get(CUSTOMER_API_URL)
        if (res.data.status == true) {
          setCustomers(res.data.customers)
        }
      } catch (err) {
        console.log(err)
      }
    }

  useEffect(() => {
    fetchCustomers()
  }, [])

  const handleDeleteCustomer = async (id) => {
    if (!confirm("Are you sure you want to delete this?")) return
    try {
      const response = await axios.delete(`${DEL_CUS_API_URL}/${id}`)
      console.log(response.data)
      if (response.data.status == true){
        console.log(response.data.message)
        setCustomers(response.data.customers)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <WebLayout>
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <div className='flex items-center justify-between'>
            <h1 className="text-2xl font-bold text-slate-800">Customers</h1>
            <Link to={"/customers/add"} className='py-2 px-3 bg-gray-800 text-white rounded hover:shadow-lg'>Add customer</Link>
          </div>

        </div>
        {/* Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                  <th className="px-4 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Created</th>
                  <th className="px-4 py-3 font-semibold">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customers.map((c) => (
                    <tr key={c.id} className="hover:bg-indigo-50/50">
                      <td className="px-4 flex gap-3 py-3 font-mono text-slate-500">
                        <button onClick={() => handleDeleteCustomer(c.id)} className='py-2 px-3 bg-gray-800 text-white rounded hover:shadow-lg'>
                          Delete
                        </button>
                        <Link to={`/customers/edit/${c.id}`} className='py-2 px-3 bg-gray-800 text-white rounded hover:shadow-lg'>
                          Edit
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-500">#{c.id}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                            {(c.name || '?').charAt(0).toUpperCase()}
                          </div>
                          <span className="font-medium text-slate-800">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{c.email}</td>
                      <td className="px-4 py-3 text-slate-600">{c.phone}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                        {c.created_at}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                        {c.updated_at}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </WebLayout>
  )
}

export default Customers