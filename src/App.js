import React from 'react'
import Niv from './components/Niv'
import Footer from './components/Footer'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instructor from './pages/Instructor';
import Udemybusness from './pages/Udemybusness';
import Mylearning from './pages/Mylearning';
import Backend from './pages/Backend';


export default function App() {
  return (
   <div>
         <Router>
          <Niv/>
             <Routes>
              <Route path="/Home" element={<Home/>} />
              <Route path="/Mylearning" element={<Instructor/>} />
              <Route path="/about" element={<Udemybusness />} />    
              <Route path="/UdemyBusness" element={<Mylearning/>} />
               <Route path="/backendcall" element={<Backend/>} />
             </Routes>
          <Footer/>
         </Router>
   </div>
  )
}
