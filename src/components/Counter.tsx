'use client'

import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return <div className="bg-slate-600 text-center">Count {count}</div>
}
