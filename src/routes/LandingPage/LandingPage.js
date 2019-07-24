import React from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Landing(props) {
  return (
    <div className='LandingPage'>
      <div className='splash'>Petful</div>
      <section className='guide'>
        <div className='guide1 slide'>
          <h1>First in first out</h1>
          <h2> Click on ADOPT below to get your pet.</h2>
        </div>
        <div className='guide2 slide'>
          <h2>you gotta wait</h2>
          <h3>Click ADOPT below</h3>
        </div>
        <div className='end-Guide slide'>
          <NavLink
            onClick={props.handleClick}
            className='NavToStats'
            to={`/adopt`}
          >
            ADOPT!
          </NavLink>
        </div>
      </section>
    </div>
  );
}
