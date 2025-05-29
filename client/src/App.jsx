import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import { BrowserRouter } from 'react-router'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  )
}

export default App
