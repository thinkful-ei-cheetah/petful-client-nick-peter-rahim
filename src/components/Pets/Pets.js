import React, { useState, useEffect, useContext } from 'react'
import PetsApiService from '../../services/pets-api-service'
import { UserContext } from '../../contexts/user-context'
import Queue from '../Queue/Queue'
import './Pets.css'

export default function Pets(props) {
  const { type = '' } = props
  const [pets, setPets] = useState([])
  const [error, setError] = useState(null)
  const userContext = useContext(UserContext)

  useEffect(() => {
    setError(null)

    PetsApiService.getPetsQueue(type)
      .then(setPets)
      .catch(setError)

    return () => {
      setPets([])
      setError(null)
    }
  }, [type])

  const handleAdopt = () => {
    PetsApiService.adoptPet(type).then(() =>
      PetsApiService.getPetsQueue(type)
        .then(setPets)
        .catch(setError)
    )

    userContext.userAdopts()
  }

  const renderPetNextInLine = () => {
    return (
      <div className="pet next-in-line">
        <div
          className="pet-image"
          style={{ backgroundImage: `url(${pets[0].imageURL})` }}
          alt={pets[0].imageDescription}
        />
        <div className="pet-stats-container">
          <h2 className="pet-name">{pets[0].name}</h2>
          <ul className="pet-info">
            <li>
              <label className="info-label" htmlFor="pet-sex">
                Sex:
              </label>
              <span className="info" id="pet-sex">
                {pets[0].sex}
              </span>
            </li>
            <li>
              <label className="info-label" htmlFor="pet-age">
                Age:
              </label>
              <span className="info" id="pet-age">
                {pets[0].age} years
              </span>
            </li>
            <li>
              <label className="info-label" htmlFor="pet-breed">
                Breed:
              </label>
              <span className="info" id="pet-breed">
                {pets[0].breed}
              </span>
            </li>
            <li>
              <label className="info-label" htmlFor="pet-story">
                Story:
              </label>
              <span className="info" id="pet-story">
                {pets[0].story}
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={`pets ${type}`}>
      {error && <p className="red">Error: {error.message}</p>}
      {pets.length && renderPetNextInLine()}
      <button onClick={handleAdopt}>Adopt</button>
      <Queue queue={pets} />
    </div>
  )
}
