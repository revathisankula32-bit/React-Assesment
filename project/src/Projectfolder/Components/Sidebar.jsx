
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Credit Risk</h2>
      <p className="subtitle">Evalution System</p>

      <div className="profile">
        <div className="avatar">CA</div>
        <div>
          <h4>Credit Risk Operations</h4>
          <p>Administrator</p>
        </div>
      </div>

      <ul className="menu">
        <li>Dashboard</li>
        <li>Credit Portfolio</li>
        <li>Risk Assessment</li>
        <li>Clients</li>
        <li>Transactions</li>
        <li className="active">User Management</li>
      </ul>

      <div className="permissions">
        <h4>Your Permissions</h4>
        <p>✓ Manage Users</p>
        <p>✓ View Risk Reports</p>
        <p>✓ Edit Credit Data</p>
        <p>✓ Approve Transactions</p>
      </div>

      <button className="logout">Logout</button>
    </div>
  )
}

export default Sidebar