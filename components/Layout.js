import Head from 'next/head';
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Brew Discover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        {children}
      </main>
    </div>
  )
}

export default Layout;