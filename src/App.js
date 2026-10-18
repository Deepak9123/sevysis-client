import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import SevyHealthApp from './sevyhealth/App';

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
import ScrollToTop from './utility/ScrollToTop';

function MainLayout() {
  const [showModal, setShowModal] = useState(false);
  const handleEnquiryOpen = () => setShowModal(true);
  const handleEnquiryClose = () => setShowModal(false);

  return (
    <div className="site-shell flex flex-col min-h-screen">
      <Header onEnquiryClick={handleEnquiryOpen} />
      <main className="site-main flex-1">
        <Outlet />
      </main>
      <Footer onEnquiryClick={handleEnquiryOpen} />
      {showModal && <EnquiryModal onClose={handleEnquiryClose} />}
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
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
        </Route>

        <Route path="/sevyhealth/*" element={<SevyHealthApp />} />
      </Routes>
    </>
  );
}

export default App;