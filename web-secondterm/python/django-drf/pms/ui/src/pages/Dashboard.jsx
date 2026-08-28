import React from 'react'
import useAuth from '../store/useAuth.js'

const Dashboard = () => {

    const user = useAuth((state) => state.user)

    return (
        <div>Dashboard {user.email ?? "no email"}</div>
    )
}

export default Dashboard