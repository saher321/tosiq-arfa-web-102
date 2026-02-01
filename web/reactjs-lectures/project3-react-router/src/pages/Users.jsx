import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { ALL_USERS } from '../utils/APIS.js';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(ALL_USERS)
        if (response.data.users.length == 0) return setUsers([]);

        setUsers(response.data.users)
        setIsLoading(false)

      } catch (error) {
        console.log("Error: ", error)
      } finally {
        setIsLoading(false)
      }
    }
    getUsers();
  }, []);

  // setInterval, setTimeout (will take seconds)
  if (isLoading) {
    return (
      <div>Loading ...</div>
    )
  }


  return (
    <div>
      <span className='block font-bold text-2xl'>Users List</span>

      <table border={1} cellPadding={10} cellSpacing={0} width="100%">
        <thead>
          <tr>
            <th className='text-left p-2 bg-gray-300'>ID</th>
            <th className='text-left p-2 bg-gray-300'>User</th>
            <th className='text-left p-2 bg-gray-300'>Gender</th>
            <th className='text-left p-2 bg-gray-300'>Phone</th>
            <th className='text-left p-2 bg-gray-300'>Role</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, i) => {
              return (
                <tr key={i} className='hover:bg-gray-100'>
                  <td>{user.id}</td>
                  <td>
                    <div className='flex'>
                      <div><img src={user.image} className='rounded-full h-16 w-16' /></div>

                      <div>
                        <div>{user.firstName} {user.lastName}</div>
                        <div><small>{user.email}</small></div>
                      </div>
                    </div>
                  </td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div>
                      {
                        user.role == "admin" ?
                        <div className='capitalize w-fit p-1 bg-green-100 text-green-700 rounded'>{user.role}</div> :
                        <div className='capitalize w-fit p-1 bg-yellow-100 text-yellow-700 rounded'>{user.role}</div>
                      }
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>

    </div>
  )
}

export default Users
