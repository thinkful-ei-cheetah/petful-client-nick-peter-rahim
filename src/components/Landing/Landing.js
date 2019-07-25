import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="Landing">
      <h1>FIFO Pet Adoption Agency</h1>
      <h2>
        Welcome to the FIFO Pet Adoption Agency!
      </h2>
      <h3>
        How to adopt:
      </h3>
      <p>Adopting your next family member is easy at FIFO PAA!</p>
      <ol start="1">
        <li>When you visit the Adoption Page you are automatically put in a queue with other users.</li>
        <li>Similarly, our pets are in a queue to meet their next mommy and daddy</li>
        <li>During your turn, you can choose to adopt the next kitty and/or puppy</li>
        <li>Welcome the new furry family member to your home!</li>
      </ol>
      <p>And... that's it!</p>

      <h3>Adopt a furry friend today!</h3>
      <Link to="/adopt">Start Adopting</Link>
    </div>
  )
}
