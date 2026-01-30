import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import About from './pages/About'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipes/:id' element={<RecipeDetails />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App
