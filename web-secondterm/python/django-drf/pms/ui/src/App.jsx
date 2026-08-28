import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './utils/ProtectedRoute'
import AuthRoute from './utils/AuthRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthRoute />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App