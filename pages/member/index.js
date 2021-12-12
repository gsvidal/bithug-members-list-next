import styles from '../../styles/Members.module.css'
import Link from 'next/link'

// Just for production
export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const res = await fetch(url)
  const data = await res.json();

  return {
    props: { members: data}
  }
}

const Members = ({ members }) => {
  return (
    <div>
      <h1>Members List</h1>
      <h4>*All following members are fictional, they were retrieve from: https://jsonplaceholder.typicode.com/users*</h4>
      <ul className={styles.member_item}>
        {members.map(member => (
          <li key={member.id}>
            <Link href={`/member/${member.id}`}>
              <a className={styles.single}>
                <h3>{member.name}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Members
