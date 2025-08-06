import type { Metadata } from 'next'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
    title: 'Count Page',
    description: 'This is Count page',
}

export default function Count() {
    return (
        <div className="bg-slate-600 text-center">
            <Counter />
        </div>
    )
}
