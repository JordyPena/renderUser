import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
       <header>Welcome to the employee tracker program</header>

      <Link
        to="/employees">
        Employee List
      </Link>
    </div>
  )
}

export default Header
