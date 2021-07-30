import React from "react"
import Link from "next/link"


const Nav = React.memo(() => {
  return(
    <nav className="nav">
      <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
    </nav>
  )
})

export default Nav