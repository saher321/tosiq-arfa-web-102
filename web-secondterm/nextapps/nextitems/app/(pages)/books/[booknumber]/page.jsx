"use client"
import WebLayout from '@/app/layouts/WebLayout'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams();
    return (
        <WebLayout>
        <div>Details # {params.booknumber}</div>
        </WebLayout>
    )
}

export default page
