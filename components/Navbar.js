import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="http://bit-hug.com" target="_blank" rel="noopener noreferrer">
          <Image src="/logo.png" width="50" height="50"alt='logo'/>
        </a>
        <h1 className='logo-text'>Bit Hug - Members List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/member">
        <a>Members List</a>
      </Link>
    </nav>
  )
}

export default Navbar
