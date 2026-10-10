import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/products/categories")
      if (response.data.status == true) {
        setCategories(response.data.catgories)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div>
      <h3>
        Product Categories
      </h3>
      <table border={1} cellPadding={15} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((category, i) => {
              return (
                <tr key={i}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>Edit / Delete</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App