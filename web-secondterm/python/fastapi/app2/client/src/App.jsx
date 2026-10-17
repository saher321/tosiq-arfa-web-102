import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Customers from './pages/Customers'
import Home from './pages/Home'
import AddCustomer from './pages/AddCustomer'
import EditCustomer from './pages/EditCustomer'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/add' element={<AddCustomer />} />
        <Route path='/customers/edit/:customer_id' element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App