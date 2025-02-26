import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai2 from './components/Bai2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Bai2/>
    </>
  )
}

export default App
