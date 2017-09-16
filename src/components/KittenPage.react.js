import KittenPreview from './KittenPreview.react'
import { Link } from 'react-router-dom'
import React from 'react'
import kittens from '../data/kittens'

export default class KittenPage extends React.Component {
  render () {
    const kitten = kittens.find(
      kitten => kitten.name === this.props.match.params.name
    )
    return (
      <div className='kitten-preview'>
        <KittenPreview {...kitten} />
        <div className='navigateBack'>
          <Link to='/'>«« Back to the index</Link>
        </div>
      </div>
    )
  }
}
