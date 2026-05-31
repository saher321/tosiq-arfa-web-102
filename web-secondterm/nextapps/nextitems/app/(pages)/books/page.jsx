"use client"
import BookItem from '@/app/components/BookItem'
import WebLayout from '@/app/layouts/WebLayout'
import { POTTER_BOOKS_API } from '@/app/utils/api'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [ books, setBooks ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(POTTER_BOOKS_API)
            if (response.data.length > 0) {
                setBooks(response.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.error("ERR:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllBooks() 
    }, [])

    return (
        <WebLayout>
        <div className='my-4'>
            <div className='my-4'>Search</div>
            <div>{ isLoading && "Loading..." }</div>
            <div className='grid grid-cols-12 gap-3'>
                {
                    books.map((book, i) => {
                        return (
                            <div key={i} className="col-span-4">
                                <Link href={`/books/${book.number}`}>
                                    <BookItem book={book}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </WebLayout>
    )
}

export default page
