import React from 'react';
import { NavLink, } from 'react-router-dom';
import './Landing.css'


// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Landing(props) {

    return (
        <div className='LandingPage'>
        <div className="splash">
                Petful
        </div>
            <section className="guide">
                <div className="guide1 slide">
                    First in first out
                </div>
                <div className="guide2 slide">
                    you gotta wait 
                </div>
                <div className="end-Guide slide">
                        <NavLink
                            onClick={props.handleClick}
                            className="NavToStats"
                            to={`/adopt`}>
                            ADOPT!
                        </NavLink>
                </div>
            </section>

        </div>
    )
}
