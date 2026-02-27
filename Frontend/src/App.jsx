import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landing_page'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<LandingPage/> }> </Route>
     </Routes>
     </BrowserRouter>

  )
}

export default App
