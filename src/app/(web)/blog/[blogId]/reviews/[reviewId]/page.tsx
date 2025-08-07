'use client'

import { notFound, redirect, useRouter } from 'next/navigation'
import { use } from 'react'

export default function ReviewsDetails({
    params,
}: {
    params: Promise<{ blogId: string; reviewId: string }>
}) {
    const { blogId, reviewId } = use(params)
    const router = useRouter()

    if (+reviewId > 10) {
        // notFound()
        // redirect('/') - server component will have redirects
    }

    const handleClick = () => {
        router.push('/')
    }

    return (
        <>
            <h2 className="text-xl font-medium">
                This is Reviews Details {reviewId} for Blog {blogId}
            </h2>

            <button onClick={handleClick}>Click</button>
        </>
    )
}
