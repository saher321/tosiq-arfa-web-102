import React, { createContext } from 'react'

export const MyContext = createContext()

const ContextStore = ({ children }) => {
    let name = "Alice";
    let age = 20;

    const printData = () => {
        console.log("Printing from Context store")
    }
    return (
        <MyContext.Provider value={{name, age, printData}}>
            { children }
        </MyContext.Provider>
    )
}

export default ContextStore
