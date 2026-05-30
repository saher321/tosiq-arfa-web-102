import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='shadow-lg text-white mx-auto m-4 max-w-3xl p-3 rounded-full flex items-center justify-between bg-[#1f1f1f]'>
        <div className='bg-white rounded-full'>
            <img width={36} src="/logo.png" alt="logo" />
        </div>
        <div className='flex gap-5'>
            <Link href={'/'} className='hover:text-amber-200'> Home </Link>
            <Link href={'/about-us'} className='hover:text-amber-200'> About us </Link>
            <Link href={'/help'} className='hover:text-amber-200'> Help </Link>
        </div>
        <div className='py-1 px-3 bg-white rounded-full text-[#1f1f1f]'>
            myexample@gmail.com
        </div>
      </nav>
    </div>
  )
}

export default Navbar
