import React from 'react'
import './Queue.css'

export default function Queue(props) {
  const { queue = [] } = props

  const renderQueue = () => {
    if (!queue.length) {
      return <h5>Looking for pets...</h5>
    } else {
      return queue.map((pet, index) => (
        <li key={index}>
          <img
            className={`pet-thumbnail${!index ? ' current' : ''}`}
            src={pet.imageURL}
            alt={pet.imageDescription}
          />
        </li>
      ))
    }
  }

  return (
    <ul className="queue">
      <p>Queue: </p> {renderQueue()}
    </ul>
  )
}
