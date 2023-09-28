import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header.jsx'
import Body from './Components/Body/Body.jsx'

import './App.css'


export default function myApp() {
return(
  <Router>
    <div>
    <Routes>
      <Route path="/Header" element={<Header/>} />
      <Route path="/Body" element={<Body/>} />
    </Routes>
    </div>
    </Router>

);
}

