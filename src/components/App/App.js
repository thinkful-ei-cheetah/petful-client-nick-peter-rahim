import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import AdoptionPage from '../../routes/AdoptionPage/AdoptionPage'
import PageNotFound from '../../routes/PageNotFound/PageNotFound'

export default function App() {
  const [error, setError] = useState(null)

  return (
    <div className="App">
      {error && <p className="red">There was an error!</p>}
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/adopt'} component={AdoptionPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}
