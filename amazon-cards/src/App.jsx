import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTab from './CardTab'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <CardTab />
  )
}

export default App
