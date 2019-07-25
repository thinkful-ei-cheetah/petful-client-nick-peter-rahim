import React from 'react'
import Pets from '../../components/Pets/Pets'
import './AdoptionPage.css'

export default function AdoptionPage() {
  return (
    <div className="AdoptionPage">
      <Pets type="dogs" />
      <Pets type="cats" />
    </div>
  )
}
