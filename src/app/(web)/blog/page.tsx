export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetching...')
        }, 3000)
    })
    return <h2 className="text-xl font-medium">This is blog page</h2>
}
