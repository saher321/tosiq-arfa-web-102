import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import DepartmentList from './pages/departments/DepartmentList'
import StudentList from './pages/students/StudentList'
import AddDepartment from './pages/departments/AddDepartment'
import EditDepartment from './pages/departments/EditDepartment'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/departments' element={<DepartmentList />} />
      <Route path='/departments/create' element={<AddDepartment />} />
      <Route path='/departments/:id/edit' element={<EditDepartment />} />
      <Route path='/students' element={<StudentList />} />
    </Routes>
  )
}

export default App
