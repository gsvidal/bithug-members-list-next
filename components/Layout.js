import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Head>
        <title>Members List | { children.type.name }</title>
        <meta name="keywords" content="members"/>
      </Head>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
