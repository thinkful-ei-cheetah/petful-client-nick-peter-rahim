import React from 'react';

import PetComp from '../PetComp/PetComp';
import './AdoptPage.css';

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Adopt(props) {
  let dogsArray = props.dogs.map(dog => {
    return (
      <>
        <img
          className='pet-array'
          src={dog.imageURL}
          alt={dog.imageDescription}
        />
        <span>{dog.name}</span>
      </>
    );
  });

  let catsArray = props.cats.map(cat => {
    return (
      <>
        <img
          className='pet-array'
          src={cat.imageURL}
          alt={cat.imageDescription}
        />
        <span>{cat.name}</span>
      </>
    );
  });

  let catPort = !props.ready ? (
    false
  ) : (
    <PetComp
      age={props.adCat.age}
      breed={props.adCat.breed}
      imgURL={props.adCat.imageURL}
      imgAlt={props.adCat.imageDescription}
      name={props.adCat.name}
      sex={props.adCat.sex}
      story={props.adCat.story}
      able={props.adCat.user_name}
      adoptPet={props.handleAdoptPet}
    />
  );

  let dogPort = !props.ready ? (
    false
  ) : (
    <PetComp
      age={props.adDog.age}
      breed={props.adDog.breed}
      imgAlt={props.adDog.imageDescription}
      imgURL={props.adDog.imageURL}
      name={props.adDog.name}
      sex={props.adDog.sex}
      story={props.adDog.story}
      able={props.adDog.user_name}
      adoptPet={props.handleAdoptPet}
    />
  );

  return (
    <>
      <div className='pets-list'>
        {dogsArray}
        {catsArray}
      </div>
      <div className='AdoptPage'>
        {console.log(props)}
        {/* <PetComp 
                age={props.adCat.age}
                breed={props.adCat.breed}
                imgAlt={props.adCat.imgAlt}
                name={props.adCat.name}
                sex={props.adCat.sex}
                story={props.adCat.story}
                able={props.adCat.user_name.able}
            />

            <PetComp 
            age={props.adCat.age}
            breed={props.adCat.breed}
            imgAlt={props.adCat.imgAlt}
            name={props.adCat.name}
            sex={props.adCat.sex}
            story={props.adCat.story}
            able={props.adCat.user_name.able}
            /> */}

        {catPort}
        {dogPort}
      </div>
    </>
    // show array of cats and dogs above current cat and dog.
    // On adopt button, Pop animal off array, and push to addcatt or dog.  Filling in page.
  );
}
