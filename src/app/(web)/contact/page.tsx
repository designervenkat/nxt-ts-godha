import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Contact Overided',
    },
    description: 'This is Contact page',
}

export default function Contact() {
    return <h2 className="text-xl font-medium">This is contact page</h2>
}
