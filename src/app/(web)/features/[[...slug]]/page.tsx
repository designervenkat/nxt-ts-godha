export default async function Features({
    params,
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params

    if (slug?.length === 2)
        return (
            <h2 className="text-xl font-medium">
                Features {slug[0]} and concept {slug[1]}
            </h2>
        )

    if (slug?.length === 1)
        return <h2 className="text-xl font-medium">Features {slug[0]}</h2>

    return <h2 className="text-xl font-medium">Features Page</h2>
}
