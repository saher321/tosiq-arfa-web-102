import Navbar from '@/app/components/Navbar'
import React from 'react'
import { BiAtom, BiCheckShield } from "react-icons/bi";

const page = () => {
  return (
    <>
    
    <Navbar />
    <div className='flex gap-3 items-center m-2 text-emerald-900 bg-emerald-200 shadow rounded p-2'>
      <BiCheckShield /> <BiAtom /> Help page
    </div>
    </>
  )
}

export default page
