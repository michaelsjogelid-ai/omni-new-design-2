import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Works from './pages/Works';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import LeadGeneration from './pages/services/LeadGeneration';
import AiChat from './pages/services/AiChat';
import AppointmentSetting from './pages/services/AppointmentSetting';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/ai-chat" element={<AiChat />} />
          <Route path="/services/appointment-setting" element={<AppointmentSetting />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;