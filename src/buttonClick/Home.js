import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      <Link
        to="/button">
      <p>Go to button</p>
      </Link>

      <Link
        to="/user">
          <p>Go to form</p>
      </Link>
    </div>
  )
}

export default Home
