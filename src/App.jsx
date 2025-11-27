import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import UserPage from './pages/UserPage'
import NewLogin from './pages/NewLogin'
import Chat from './pages/Chat'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
      <Route index path='/' element={<Home />}/>
      <Route  path='/login' element={<NewLogin />}/>
      <Route  path='/signup' element={<Signup />}/>
      <Route  path='/user' element={<UserPage />}/>
      <Route  path='/chat' element={<Chat />}/>
    </Routes>
   </Router>
  )
}

export default App
