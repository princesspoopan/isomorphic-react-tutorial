import { Link } from 'react-router-dom'
import React from 'react'

export default class Layout extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <header>
          <Link to='/'>
            {'>> Meow Kittens <<'}
          </Link>
        </header>
        <div className='app-content'>{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    )
  }
}
