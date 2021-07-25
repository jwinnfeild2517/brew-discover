import Link from "next/link"

const Nav = () => (
  <nav className="nav">
    <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
  </nav>
)

export default Nav