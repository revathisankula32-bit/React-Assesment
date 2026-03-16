import './App.css'
import Sidebar from './Projectfolder/Components/Sidebar'
import Topbar from './Projectfolder/Components/Topbar'
import UserManagement from './Projectfolder/Components/UserManagement'


function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <UserManagement />
      </div>
    </div>
  )
}

export default App

