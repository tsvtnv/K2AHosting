import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Games } from './pages/Games';
import { DedicatedServers } from './pages/DedicatedServers';
import { Support } from './pages/Support';
import { Status } from './pages/Status';
import { KnowledgeBase } from './pages/KnowledgeBase';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/dedicated-servers" element={<DedicatedServers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/status" element={<Status />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;