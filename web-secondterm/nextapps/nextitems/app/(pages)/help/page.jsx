
import WebLayout from '@/app/layouts/WebLayout';
import React from 'react'
import { BiAtom, BiCheckShield } from "react-icons/bi";

const page = () => {
  return (
    <WebLayout>
    <div className='flex gap-3 items-center m-2 text-emerald-900 bg-emerald-200 shadow rounded p-2'>
      <BiCheckShield /> <BiAtom /> Help page
    </div>
    </WebLayout>
  )
}

export default page
