import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingRender from './components/Landing';
import HomeRender from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingRender /> } />
        <Route path="/callback" element={<HomeRender /> } />
      </Routes>
    </Router>
  );
}

export default App;
