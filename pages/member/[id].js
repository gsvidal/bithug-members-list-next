export const getStaticPaths = async () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const res = await fetch(url)
  const data = await res.json();
  const paths = data.map(member => {
    return {
      params: {id: member.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { member: data }
  }
}

const memberItem = ({member}) => {
  return (
    <div>
      <h1>Member # {member.id}:</h1>
      <h3>Name: {member.name}</h3>
      <h3>Email: {member.email}</h3>
      <h3>Website: {member.website}</h3>
    </div>
  )
}

export default memberItem
