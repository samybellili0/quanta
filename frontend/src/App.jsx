import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SmoothScrollProvider from './components/SmoothScrollProvider.jsx';
import ScrollProgressHud from './components/ScrollProgressHud.jsx';
import StarfieldCanvas from './components/StarfieldCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import EventDetail from './pages/EventDetail.jsx';
import JoinPage from './pages/JoinPage.jsx';
import FooterSection from './sections/FooterSection.jsx';

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Top Laser Progress & Floating Telemetry HUD */}
        <ScrollProgressHud />

        {/* Interactive Quantum Starfield Canvas */}
        <StarfieldCanvas />

        {/* Quantum Navbar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Home />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Quantum Footer */}
        <FooterSection />
      </div>
    </SmoothScrollProvider>
  );
}
