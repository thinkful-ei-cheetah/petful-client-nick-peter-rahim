import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AdoptApiService from '../../services/adopt-page-api-service'
import Oops from '../Oops/Oops'
import Landing from '../../routes/LandingPage/LandingPage'
import Adopt from '../../routes/AdoptPage/AdoptPage'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'Thinkful',
      dog: [],
      cat: [],
      adDog: null,
      adCat: null,
      queue: null,
      ready: false
    }
  }

  onLandingClick = () => {
    console.log('i was clicked')
    AdoptApiService.apiGetCat()
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        let able
        data.map(pet => {
          if (pet.user_name === this.state.user) {
            able = pet
          }
        })
        this.setState({
          cat: data,
          adCat: able
        })
        // console.log(data)
      })

    AdoptApiService.apiGetDog()
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        let able = null
        data.map(pet => {
          if (pet.user_name === this.state.user) {
            able = pet
          }
        })
        this.setState({
          dog: data,
          adDog: able,
          ready: true
        })
        // console.log(data)
      })
  }

  render() {
    const landingPage = props => {
      return <Landing handleClick={this.onLandingClick} />
    }

    const adoptPage = props => {
      return (
        <Adopt
          ready={this.state.ready}
          cats={this.state.cat}
          dogs={this.state.dog}
          adDog={this.state.adDog}
          adCat={this.state.adCat}
        />
      )
    }

    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={landingPage} />
            <Route exact path="/adopt" component={adoptPage} />
            <Route exact path="/404" component={Oops} />
            <Redirect to="/404" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App