import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
// import Cursor from './components/Cursor'
import LandingPage from './components/IntroPage'
import Navbar from './components/Navbar'
import HomePage from './Pages/MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <HomePage/>
    </>
  )
}

export default App
