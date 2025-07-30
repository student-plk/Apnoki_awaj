import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import VoiceTalk from './pages/VoiceTalk';
import Premium from './pages/Premium';
import AdminPanel from './components/AdminPanel';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-cream">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/voice-talk" element={<VoiceTalk />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;