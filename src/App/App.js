import React, { Component }from 'react';

import { Route, Redirect , Switch} from 'react-router-dom'

import './App.css';

import Oops from '../Oops/Oops';
import Landing from '../LandingPage/LandingPage'
import Adopt from '../AdoptPage/AdoptPage'

class App extends Component {

  render(){
    const landingPage = (props) => {
      return(
        <Landing 
      
        />
      )
      }

      const adoptPage = (props) => {
        return(
          <Adopt 
            
          />
        )
        }

    return (
    <div className="App">
      
      <main>
        <Switch>
        <Route exact path='/' component={landingPage}/>
              <Route exact path='/adopt' component={adoptPage}/>
              <Route exact path='/404' component={Oops}/>
              <Redirect to='/404' />
        </Switch>
      </main>

    </div>
  );
  }
  
}

export default App;
