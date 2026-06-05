"use client"
import WebLayout from '@/app/layouts/WebLayout'
import { POTTER_BOOKS_API } from '@/app/utils/api.js'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const params = useParams();
    const [ book, setBook ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)

    const getSingleBook = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(POTTER_BOOKS_API)
            if (response.data.length > 0) {
                
                const singleBook = response.data.find((book) => 
                    {return book.number == params.booknumber}
                )
                console.log(singleBook.title)
                setBook(singleBook)
                setIsLoading(false)
            }
        } catch (error) {
            console.error("ERR:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getSingleBook() 
    }, [params.booknumber])
    return (
        <WebLayout>
            <div className='border border-2 border-gray-200 rounded-lg p-3'>
                <div className='text-2xl font-bold'>
                    {book?.title}
                </div>
                <div className='my-5 flex items-start justify-between'>
                    <div>
                        <img className="h-56 w-40" src={book?.cover} alt="" />
                    </div>
                    <div className='p-3 h-12 w-12 text-center bg-black rounded-full text-white'>{book?.number}</div>
                </div>
                <div>
                    {/* 2026-06-05T13:12:55+05:00 :: moment => June 28, 1997 */}
                    {book?.description}
                </div>
            </div>
        </WebLayout>
    )
}

export default page
