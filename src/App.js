import {useState, useEffect} from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(brror => {
        setError(error.message)
      })
  }, [])

  const handleAddUser = user => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        setUsers([...users, response.data])
      })
      .catch(brror => {
        setError(error.message)
      })
  }

  const handleEditUser = user => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then(response => {
        setUsers(users.map(u => (u.id === user.id ? response.data : u)))
      })
      .catch(brror => {
        setError(error.message)
      })
  }

  const handleDeleteUser = userId => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(u => u.id !== userId))
      })
      .catch(brror => {
        setError(error.message)
      })
  }

  return (
    <div>
      <h1>User Management App</h1>
      <ErrorBoundary>
        <UserList users={users} onDelete={handleDeleteUser} />
        <UserForm onAdd={handleAddUser} onEdit={handleEditUser} />
      </ErrorBoundary>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default App
