export default async function BlogDetails({
    params,
}: {
    params: Promise<{ blogId: string }>
}) {
    const blogId = (await params).blogId

    return (
        <h2 className="text-xl font-medium">
            This is Blog Details for {blogId}
        </h2>
    )
}
