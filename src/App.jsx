import { useState } from 'react'
import './App.css'
import Home from "./Home";
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Contact from "./contact"


function App() {
  
  return (
    
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/contact' element={<Contact/>} exact />
        </Routes>
      </Router>
      <footer/>
    </div>
    
  )
}

export default App
