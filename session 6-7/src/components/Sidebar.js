import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <ul className='list-unstyled  '>

        <li>
          <Link to='/products'>getAllProducts</Link>
        </li>
        <li>
          <Link to='/'>getAllcategories</Link>
        </li>

      </ul>
    </>
  )
}

export default Sidebar
