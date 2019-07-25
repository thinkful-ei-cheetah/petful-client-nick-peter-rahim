import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import AdoptionPage from '../../routes/AdoptionPage/AdoptionPage'
import PageNotFound from '../../routes/PageNotFound/PageNotFound'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/adopt'} component={AdoptionPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}
