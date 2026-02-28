import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landing_page'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import SignInSide from './pages/SignInSide';
import SignupSide from './pages/SignupSide';

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<LandingPage/> }> </Route>
       <Route path='/AuthsignIN' element={<SignInSide/> }> </Route>
       <Route path='/AuthsignUp' element={<SignupSide/> }> </Route>

     </Routes>
     </BrowserRouter>

  )
}

export default App
