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
      <ul>
        <li>1. When you visit the Adoption Page you are automatically put in a queue with other users.</li>
        <li>2. Similarly, our pets are in a queue to meet their next mommy and daddy</li>
        <li>3. During your turn, you can choose to adopt the next kitty and/or puppy</li>
        <li>4. Welcome the new furry family member to your home!</li>
      </ul>
      <p>And... that's it!</p>

      <h3>Get started now!</h3>
      <Link to="/adopt">Adopt</Link>
    </div>
  )
}
