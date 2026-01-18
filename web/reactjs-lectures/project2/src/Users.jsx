import React from 'react'
import users from './utils/usersdata.js'
const Users = () => {
  return (
    <div>
      <table border={1} cellPadding={10} cellSpacing={0} width={"100%"}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
            </tr>
        </thead>
        <tbody>
            {   users.length == 0 ? 
                <tr><td colSpan={5}>Records not found</td></tr> :
                users.map((user) => {
                    return (
                        // user.id >= 5 &&
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>{user.designation}</td>
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
