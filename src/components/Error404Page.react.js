import { Link } from 'react-router-dom'
import React from 'react'

export default function Error404Page () {
  return (
    <div className='error-404-page'>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to='/'>Go back to the main page</Link>
      </p>
    </div>
  )
}
