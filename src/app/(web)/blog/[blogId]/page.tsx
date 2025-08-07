type BlogProps = {
    params: Promise<{ blogId: string }>
    searchParams: Promise<{ lang?: 'en' | 'fr' }>
}

export default async function BlogDetails({ params, searchParams }: BlogProps) {
    const { blogId } = await params
    const { lang } = await searchParams

    return (
        <h2 className="text-xl font-medium">
            This is Blog Details for {blogId} reading in {lang}
        </h2>
    )
}
