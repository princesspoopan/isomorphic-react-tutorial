import { Link } from 'react-router-dom'
import React from 'react'
import kittens from '../data/kittens'

export default class IndexPage extends React.Component {
  render () {
    return (
      <div className='home'>
        <div className='kitten-selector'>
          {kittens.map((kitten) => (
            <Link key={kitten.name} to={`/kittens/${kitten.name}`}>
              { kitten.name }
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
