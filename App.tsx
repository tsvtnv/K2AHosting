import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Games } from './pages/Games';
import { DedicatedServers } from './pages/DedicatedServers';
import { VPSHosting } from './pages/VPSHosting';
import { Support } from './pages/Support';
import { Status } from './pages/Status';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { VPSConfig } from './pages/VPSConfig';
import { DedicatedConfig } from './pages/DedicatedConfig';
import { GameHosting } from './pages/GameHosting';
import { GameDeploy } from './pages/GameDeploy';
import { CustomQuote } from './pages/CustomQuote';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game" element={<React.Fragment><Games/></React.Fragment>} /> {/* Redirect/Alias for legacy links */}
          <Route path="/game-hosting" element={<GameHosting />} />
          <Route path="/game-deploy" element={<GameDeploy />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/configure/vps" element={<VPSConfig />} />
          <Route path="/configure/dedicated" element={<DedicatedConfig />} />
          <Route path="/dedicated-servers" element={<DedicatedServers />} />
          <Route path="/custom-quote" element={<CustomQuote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/status" element={<Status />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;