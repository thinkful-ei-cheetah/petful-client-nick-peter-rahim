import React from 'react'
import Pets from '../../components/Pets/Pets'
import './AdoptionPage.css'
import UsersQueue from '../../components/UsersQueue/UsersQueue';

export default function AdoptionPage() {
  return (
    <main>
      <h2>Adoption Page</h2>
      <UsersQueue />
      <div className="AdoptionPage">
        <Pets type="dogs" />
        <Pets type="cats" />
      </div>
    </main>
  )
}
