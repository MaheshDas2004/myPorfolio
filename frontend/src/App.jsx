import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AllProjects from './pages/AllProjects'
import AllCertificates from './pages/AllCertificates'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/allprojects' element={<AllProjects/>}/>
      <Route path='/allcertificates' element={<AllCertificates/>}/> 
    </Routes>
    </>
  )
}

export default App
