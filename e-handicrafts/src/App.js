import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import RoleSelect from './pages/RoleSelect';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;