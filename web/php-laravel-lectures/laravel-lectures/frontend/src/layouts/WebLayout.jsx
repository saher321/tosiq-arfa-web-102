import React from 'react'
import Navbar from '../components/Navbar'

const WebLayout = ({ children }) => {
    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100">

                    {children}
                </div>
            </div>


        </>
    )
}

export default WebLayout
