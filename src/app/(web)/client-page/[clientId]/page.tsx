'use client'

import { use } from 'react'

export default function ClientId({
    params,
}: {
    params: Promise<{ clientId: string }>
}) {
    const { clientId } = use(params)
    return <h2 className="text-xl font-medium">This is Client Id {clientId}</h2>
}
