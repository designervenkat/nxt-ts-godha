import { Metadata } from 'next'

type BlogProps = {
    params: Promise<{ blogId: string }>
}

export const generateMetadata = async ({
    params,
}: BlogProps): Promise<Metadata> => {
    const { blogId } = await params

    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`IPhone ${blogId}`)
        }, 1000)
    })

    return {
        title: `${title}`,
        description: `This is description for ${blogId}`,
    }
}

export default async function BlogDetails({ params }: BlogProps) {
    const blogId = (await params).blogId

    return (
        <h2 className="text-xl font-medium">
            This is Blog Details for {blogId}
        </h2>
    )
}
