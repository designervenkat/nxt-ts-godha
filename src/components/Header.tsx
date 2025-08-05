import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <ul className="flex items-center justify-between w-full max-w-md gap-x-4 text-base mb-10">
            <li>
                <Link href="/"> Home</Link>
            </li>
            <li>
                <Link href="/about"> About</Link>
            </li>
            <li>
                <Link href="/blog"> Blog</Link>
            </li>
            <li>
                <Link href="/contact"> Contact</Link>
            </li>
        </ul>
    )
}
