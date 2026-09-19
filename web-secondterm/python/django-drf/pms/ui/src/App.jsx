import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './utils/ProtectedRoute'
import AuthRoute from './utils/AuthRoute'
import ForogotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Customers from './pages/customers/Customers'
import AddCustomer from './pages/customers/AddCustomer'
import EditCustomer from './pages/customers/EditCustomer'
import Projects from './pages/projects/Projects'
import AddProject from './pages/projects/AddProject'
import EditProject from './pages/projects/EditProject'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthRoute />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForogotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Dashboard />}/>

          {/* customer routes */}
          <Route path='/customers' element={<Customers />}/>
          <Route path='/customers/add' element={<AddCustomer />}/>
          <Route path='/customers/edit/:id' element={<EditCustomer />}/>
          
          {/* project routes */}
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/add' element={<AddProject />}/>
          <Route path='/projects/edit/:id' element={<EditProject />}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App