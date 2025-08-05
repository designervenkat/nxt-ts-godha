import { notFound } from 'next/navigation'

export default async function ReviewsDetails({
    params,
}: {
    params: Promise<{ blogId: string; reviewId: string }>
}) {
    const { blogId, reviewId } = await params

    if (+reviewId > 10) {
        notFound()
    }

    return (
        <h2 className="text-xl font-medium">
            This is Reviews Details {reviewId} for Blog {blogId}
        </h2>
    )
}
