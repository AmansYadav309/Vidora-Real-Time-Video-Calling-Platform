import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landing_page'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import SignInSide from './pages/SignInSide';
import SignupSide from './pages/SignupSide';
import { AuthProvider } from './contexts/Authcontex';
import Authentication from './pages/Authentication';

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <BrowserRouter>
     <AuthProvider>
     <Routes>
       <Route path='/' element={<LandingPage/> }> </Route>
       <Route path='/AuthsignIN' element={<SignInSide/> }> </Route>
       <Route path='/AuthsignUp' element={<SignupSide/> }> </Route>
       <Route path='/Auth' element={<Authentication/> }> </Route>


     </Routes>
     </AuthProvider>
     </BrowserRouter>

  )
}

export default App
