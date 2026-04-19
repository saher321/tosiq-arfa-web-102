import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { NotesList } from './pages/NotesList'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path='/' element={<Home />} />
      <Route path='/notes' element={<NotesList />} />
    </Routes>
  )
}

export default App