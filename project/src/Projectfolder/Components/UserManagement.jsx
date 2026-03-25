import { useState } from 'react'

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Revathi Admin', username: 'Revathi_AD', role: 'Administrator', active: 'Active' },
    { id: 2, name: 'Vishal(Test)', username: 'Vishal_TS', role: 'Manager', active: 'Active' },
    { id: 4, name: 'Swapna', username: 'Swapna_TA', role: 'User', active: 'Active' },
    { id: 5, name: 'Khadar', username: 'khadar_le', role: 'Admin', active: 'In Active'},
  ])

 const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [showForm, setShowForm] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    role: 'Manager',
    active: 'Active',
  })

  const handleAddUser = () => {
    if (!newUser.name || !newUser.username) return

    const userToAdd = {
      id: users.length + 1,
      ...newUser,
    }

    setUsers([...users, userToAdd])
    setNewUser({
      name: '',
      username: '',
      role: 'Manager',
      active: 'Active',
    })
    setShowForm(false)
  }

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())

    const matchesRole =
      roleFilter === 'All Roles' || user.role === roleFilter

    return matchesSearch && matchesRole
  })

  return (
    <div className="user-management">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search users by username or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option>All Roles</option>
          <option>Administrator</option>
          <option>Manager</option>
        </select>

        <button className="add-user" onClick={() => setShowForm(true)}>
          + Add User
        </button>
      </div>

      {showForm && (
        <div className="user-form">
          <input
            type="text"
            placeholder="Enter name"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Enter username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />

          <select
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value })
            }
          >
            <option>Administrator</option>
            <option>Manager</option>
          </select>

          <button className="add-user" onClick={handleAddUser}>
            Save User
          </button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>USER</th>
            <th>USERNAME</th>
            <th>ROLE</th>
            <th>IS ACTIVE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <strong>{user.name}</strong>
                <br />
                ID: {user.id}
              </td>
              <td>{user.username}</td>
              <td>
                <span className="role-badge">{user.role}</span>
              </td>
              <td>
                <span className="active-badge">{user.active}</span>
              </td>
              <td>
                <span style={{ cursor: 'pointer', marginRight: '10px' }}>✏️</span>
                <span
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => handleDelete(user.id)}
                >
                  🗑️
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserManagement
