import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Bit Hug</h1>
        <p className={styles.text}>Your online community at a bit of distance.</p>
        <Link href="/member">
          <a className={styles.btn}>See Member Listing</a>
        </Link>
      </div>
    </>
  )
}
