import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Page',
    description: 'This is about page',
}

export default function AboutUs() {
    return <h2 className="text-xl font-medium">This is about page</h2>
}
