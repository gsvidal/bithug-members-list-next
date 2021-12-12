import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound404 = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [router])

  return (
    <div className="not-found">
      <h1>Oops something went wrong &#9785;</h1>
      <h2>The page couldn&apos;t be found</h2>
      <p>Go back to the <Link href="/"><a>Home</a></Link></p>
      <p>The page is going to be redirect to home in 5 seconds...</p>
    </div>
  )
}

export default NotFound404
