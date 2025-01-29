

import './App.css';
import authorizeSpotify from './components/data/auth';

const url = authorizeSpotify()

function App() {
  return (
    <div className="App">
      <h1>I'm here now</h1>
    </div>
  );
}

export default App;
