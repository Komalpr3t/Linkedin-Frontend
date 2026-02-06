//client-side routing setup
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

function App() {
  return (
   <Router>
    <Navbar/>
      {/* defining different routes */}
    <Routes>
      {/* individual routes */}
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

    {/*footer*/}
   </Router>
  )
}

export default App
