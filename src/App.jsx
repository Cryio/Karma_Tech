import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import BannerSlider from './components/BannerSlider';
import ProjectGallery from './components/ProjectGallery';
import Specialties from './components/Specialties';
import Clientele from './components/Clientele';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <TopBar />
        <Navigation />
        
        <Routes>
          <Route path="/gallery" element={<ProjectGallery />} />
          <Route path="/" element={
            <main className="flex-grow">
              <BannerSlider />
              <Specialties />
              <Clientele />
              <About />
              <Contact />
            </main>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App; 