import {useState} from 'react'

function UserForm({onAdd, onEdit}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const user = {name, email, department}
    onAdd(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Department:
        <input
          type="text"
          value={department}
          onChange={event => setDepartment(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm
