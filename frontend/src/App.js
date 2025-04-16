import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Update from './Update';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memes/:id" element={<Update />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
