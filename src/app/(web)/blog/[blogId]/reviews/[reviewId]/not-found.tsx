import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="grid place-content-center text-center">
            <h2>Review Not Found</h2>

            <Link href="/" className="my-4 px-9 py-4 bg-slate-700 text-white">
                Return Home
            </Link>
        </div>
    )
}
