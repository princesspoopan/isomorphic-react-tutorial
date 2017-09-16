import React from 'react'

export default function KittenPreview ({ name, avatar }) {
  return (
    <div>
      <div>
        { name }
      </div>
      <img src={avatar} />
    </div>
  )
}
