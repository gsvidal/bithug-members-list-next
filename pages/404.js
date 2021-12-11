import Link from 'next/link'

const NotFound404 = () => {
  return (
    <div className="not-found">
      <h1>Oops something went wrong</h1>
      <h2>The page couldn't be found</h2>
      <p>Go back to the <Link href="/"><a>Home</a></Link></p>
    </div>
  )
}

export default NotFound404
