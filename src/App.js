import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import EducationManagement from './pages/EducationManagement';
import HealthcarePathlab from './pages/HealthcarePathlab';
import DesignDevelopment from './pages/DesignDevelopment';
import HrmsSolution from './pages/HrmsSolution';
import FindUs from './pages/FindUs';
import ScrollToTop from './utility/ScrollToTop'; // ✅ You can keep this here

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleEnquiryOpen = () => setShowModal(true);
  const handleEnquiryClose = () => setShowModal(false);

  return (
    <>
      <ScrollToTop /> {/* 👈 Safe here because BrowserRouter is in index.js */}

      <div className="flex flex-col min-h-screen">
        <Header onEnquiryClick={handleEnquiryOpen} />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services/education-management" element={<EducationManagement />} />
            <Route path="/services/hospital-pathlab" element={<HealthcarePathlab />} />
            <Route path="/services/design-development" element={<DesignDevelopment />} />
            <Route path="/services/hrms-solution" element={<HrmsSolution />} />
            <Route path="/find-us" element={<FindUs />} />
          </Routes>
        </main>

        <Footer onEnquiryClick={handleEnquiryOpen} />
        {showModal && <EnquiryModal onClose={handleEnquiryClose} />}
      </div>
    </>
  );
}

export default App;
