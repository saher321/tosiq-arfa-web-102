import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import DepartmentList from './pages/departments/DepartmentList'
import StudentList from './pages/students/StudentList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/departments' element={<DepartmentList />} />
      <Route path='/students' element={<StudentList />} />
    </Routes>
  )
}

export default App
