import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/user-context'
import './UsersQueue.css'

export default function UsersQueue() {
  const [users, setUsers] = useState([])
  const [currUser, setCurrUser] = useState(null)
  const [queueToggle, setQueueToggle] = useState(false)
  const userContext = useContext(UserContext)

  useEffect(() => {
    const usersQueue = userContext.getUsersQueue()

    setCurrUser(usersQueue[0])
    setUsers(usersQueue.slice(1))

    return () => {
      setCurrUser(null)
      setUsers(null)
    }
  }, [userContext])

  const renderUsersQueue = () => {
    return (
      <div
        className="UsersQueue__dropdown"
        onClick={() => setQueueToggle(!queueToggle)}
      >
        <button className="UsersQueue__dropdown-btn">
          Users Queue {queueToggle ? String.fromCharCode(9650) : String.fromCharCode(9660)}
        </button>
        <div
          className={`UsersQueue__dropdown-content ${queueToggle && 'expanded'}`}
        >
          {users.map((user, index) => (
            <span key={index} className="UsersQueue__dropdown-user">
              {`${user.firstName} ${user.lastName}`}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="UsersQueue">
      <span className="UsersQueue__curr-user">
        {currUser && `${currUser.firstName} is Adopting...`}
      </span>
      {renderUsersQueue()}
    </div>
  )
}
