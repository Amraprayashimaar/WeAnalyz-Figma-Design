import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Helpdesk from './Pages/Helpdesk';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
