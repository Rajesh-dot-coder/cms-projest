import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Signin/>
    </>
  )
}

export default App
