import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
             <Link to='/'> View Data </Link>
             <Link to='/Table'> Enter Data </Link>
             <Link to='/Page'> Enter and View data </Link>
            </nav>
            </div>
  )
}

export default Navbar