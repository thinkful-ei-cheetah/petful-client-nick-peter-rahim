import React from 'react'
import UsersApiService from '../services/users-api-service'

export const UserContext = React.createContext({
  usersQueue: [],
  getUsersQueue: () => {},
  setUsersQueue: () => {},
  userAdopts: () => {}
})

// export default UserContext

export class UserProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      usersQueue: []
    }
  }

  componentDidMount = () => {
    UsersApiService.getUsers().then(this.setUsersQueue)
  }

  getUsersQueue = () => {
    return this.state.usersQueue
  }

  setUsersQueue = usersQueue => {
    this.setState({ usersQueue })
  }

  userAdopts = () => {
    UsersApiService.userAdopts()
      .then(() => 
        UsersApiService.getUsers()
          .then(this.setUsersQueue)
      )
  }

  render() {
    const value = {
      usersQueue: this.state.usersQueue,
      getUsersQueue: this.getUsersQueue,
      setUsersQueue: this.setUsersQueue,
      userAdopts: this.userAdopts
    }

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
