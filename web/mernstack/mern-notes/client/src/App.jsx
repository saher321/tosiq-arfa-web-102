import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { NotesList } from './pages/NotesList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notes' element={<NotesList />} />
    </Routes>
  )
}

export default App