import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AllProjects from './pages/AllProjects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/allprojects' element={<AllProjects/>}/> 
    </Routes>
    </>
  )
}

export default App
