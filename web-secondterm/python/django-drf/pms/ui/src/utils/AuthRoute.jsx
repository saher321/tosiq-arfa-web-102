import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../store/useAuth.js'

const AuthRoute = () => {
    const isAuthenticated = useAuth((state) => state.isAuthenticated)
    return isAuthenticated ? 
    <Navigate to={'/'} replace={true}/> :
    <Outlet />
}

export default AuthRoute