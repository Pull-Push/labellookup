import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeRender from './components/Home';
import LandingRender from './components/Landing';

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
