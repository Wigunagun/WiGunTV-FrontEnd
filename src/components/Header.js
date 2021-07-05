import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <nav className="navbar movie-list-header">
        <div className="container-fluid">
          <Link as={Link} to='/' className="text-white navbar-brand">
            <h2>WiGunTV</h2>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
