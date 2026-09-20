import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout'
import { Link } from 'react-router'
import { LuPencil, LuTrash2 } from 'react-icons/lu'
import axios from 'axios'
import { DEL_PROJECT_API, PROJECTS_API } from '../../utils/apis'
import toast from 'react-hot-toast'
import moment from 'moment'

const Projects = () => {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        try {
            const response = await axios.get(PROJECTS_API)
            console.log(response.data)
            if (response.data.status == true) {
                setProjects(response.data.projects)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    const handleDeleteProject = async (id) => {
        if (!id) {
            toast.error("ID not found")
            return;
        }
        try {
            const res = await axios.delete(`${DEL_PROJECT_API}/${id}/`)
            if (res.data.status == true) {
                toast.success(res.data.message)
                setProjects(res.data.project)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])
    return (
        <RoleBasedLayout>
            <div className='bg-white p-5 rounded-lg shadow-md'>
                <div className='mb-5 flex items-center justify-between'>
                    <div className='font-bold text-[20px]'>
                        Projects
                    </div>
                    <div>
                        <Link
                            className='bg-blue-600 border border-gray-300 rounded-md py-2 px-4 text-white hover:bg-blue-700'
                            to={'/projects/add'}>Add new</Link>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-sm text-gray-700">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">Sr#</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Title</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Customer name</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Deadline</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                                <th scope="col" className="px-6 py-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                projects.map((project, i) => {
                                    return (
                                        <tr key={i} className="cursor-pointer bg-white hover:bg-gray-100 transition-colors">
                                            <td className="px-6 py-4">{i + 1}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900">{project.title}</td>
                                            <td className="px-6 py-4">{project.client}</td>
                                            <td className="px-6 py-4">{moment(project.dead_line).format('ll')}</td>
                                            <td className="px-6 py-4">{project.status}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        to={`/projects/edit/${project.id}`}
                                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                                                        <LuPencil />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDeleteProject(project.id)}
                                                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition">
                                                        <LuTrash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Projects
