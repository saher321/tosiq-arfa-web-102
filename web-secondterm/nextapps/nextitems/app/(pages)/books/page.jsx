"use client"
import BookItem from '@/app/components/BookItem'
import WebLayout from '@/app/layouts/WebLayout'
import { POTTER_BOOKS_API } from '@/app/utils/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [ books, setBooks ] = useState([])

    const getAllBooks = async () => {
        try {
            const response = await axios.get(POTTER_BOOKS_API)
            if (response.data.length > 0) {
                setBooks(response.data)
            }
        } catch (error) {
            console.error("ERR:", error)
        }
    }

    useEffect(() => {
        getAllBooks() 
    }, [])

    return (
        <WebLayout>
        <div className='my-4'>
            <div className='my-4'>Search</div>
            <div className='grid grid-cols-12 gap-3'>
                {
                    books.map((book, i) => {
                        return (
                            <div key={i} className="col-span-4">
                                <BookItem book={book}/>
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
