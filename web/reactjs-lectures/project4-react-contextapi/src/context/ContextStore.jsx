import React, { createContext } from 'react'

export const MyContext = createContext()

const ContextStore = ({ children }) => {
    let name = "Alice";
    let age = 20
    return (
        <MyContext.Provider value={{name, age}}>
            { children }
        </MyContext.Provider>
    )
}

export default ContextStore
