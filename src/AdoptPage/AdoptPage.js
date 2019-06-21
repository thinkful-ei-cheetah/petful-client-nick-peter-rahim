import React from 'react';

import PetComp from '../PetComp/PetComp'
import './AdoptPage.css'

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Landing(props) {


    return (
        <div className='AdoptPage'>
            {console.log(props)}
            <PetComp />
            <PetComp />
        </div>
        
    )
}
