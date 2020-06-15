// Packages
import React from 'react';

// Components
import Catalog from './components/container/Catalog';
import Nav from './components/container/Nav';

// Static
import './style/style.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Catalog/>
    </div>
  );
}

export default App;
