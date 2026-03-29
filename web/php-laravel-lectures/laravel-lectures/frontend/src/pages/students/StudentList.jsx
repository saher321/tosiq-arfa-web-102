import React, { useEffect, useState } from 'react'
import WebLayout from '../../layouts/WebLayout'
import axios from 'axios'
import { All_STD_API } from '../../utils/APIS'
import toast from 'react-hot-toast'
import { Link } from 'react-router'
import moment from 'moment'

const StudentList = () => {

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const getStudents = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(All_STD_API)
      if (response.data && response.data.students) {
        console.log(response.data.students)
        setStudents(response.data.students)
        setIsLoading(false)
      } else {
        toast.error('Failed to fetch students!')
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      toast.error('Server error!')
      console.log("ERR: ", error)
    }
  }

  useEffect(() => {
    getStudents()
  }, [])

  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!confirm("Delete this record forever?")) return;
    try {
      setIsLoading(true)
      const response = await axios.get(DEL_STD_API + "/" + id + "/delete")
      if (response.data.status == true) {
        toast.success(response.data.message)
        await getStudents()
        setIsLoading(false)
      } else {
        toast.error(response.data.message)
        setIsLoading(false)
      }
    } catch (error) {
      toast.error('Server error!')
      setIsLoading(false)
    }


  }

  return (
    <WebLayout>

      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700">Students</h2>
      </div>

      <div className="overflow-x-auto">
        {isLoading ?
          <div className='px-6 py-4'>Loading...</div> :
          <table className="w-full text-sm text-left">

            <thead className="text-gray-500 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium">Student ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Department</th>
                <th className="px-6 py-3 font-medium">Created at</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-gray-700">{student.id}</td>
                  <td className="px-6 py-4 text-gray-700">{student.name}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {student.department ? 
                    <span className="w-fit p-[2px] bg-gray-200 border border-gray-300 rounded my-1 text-xs block">{student.department.name}</span> : 
                    'N/A'
                    }
                  </td>
                  <td className="px-6 py-4 text-gray-500">{moment(student.created_at).format('lll')}</td>
                  <td className="px-6 py-4">
                    <button onClick={(e) => handleDelete(e, student.id)} className="cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </WebLayout>
  )
}

export default StudentList
