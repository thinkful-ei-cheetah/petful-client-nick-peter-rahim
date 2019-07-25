import React, { useState, useEffect, useContext } from 'react'
import {UserContext} from '../../contexts/user-context'

export default function UsersQueue() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const userContext = useContext(UserContext)


  useEffect(() => {
    setError(null)

    setUsers(userContext.getUsersQueue())

    return () => {
      setError(null)
    }
  }, [userContext])

  const renderUsersQueue = () => {
    return users.map((user, index) => (
      <li key={index}>
        <span className="user">{`${user.firstName} ${user.lastName}`}</span>
      </li>
    ))
  }

  return (
    <div className="users">
      {error && <p className="red">Error: {error.message}</p>}
      <ul className="users queue">{renderUsersQueue()}</ul>
    </div>
  )
}
