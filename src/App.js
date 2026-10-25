import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

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

const PAGE_TITLES = {
  '/about': 'About',
  '/services': 'Services',
  '/contact': 'Contact',
  '/dashboard': 'Dashboard',
  '/services/education-management': 'Education Management',
  '/services/hospital-pathlab': 'Hospital & Pathlab Solution',
  '/services/design-development': 'Design & Development',
  '/services/hrms-solution': 'HRMS Solution',
  '/find-us': 'Find Us',
  '/sevyhealth/login': 'Login',
  '/sevyhealth/patient/dashboard': 'Dashboard',
  '/sevyhealth/patient/appointments': 'Appointments',
  '/sevyhealth/patient/prescriptions': 'Prescriptions',
  '/sevyhealth/patient/reports': 'Lab Reports',
  '/sevyhealth/patient/billing': 'Billing',
  '/sevyhealth/patient/profile': 'Profile',
  '/sevyhealth/doctor/dashboard': 'Dashboard',
  '/sevyhealth/doctor/opd': 'OPD Consultation',
  '/sevyhealth/doctor/ipd/monitor': 'IPD Monitoring',
  '/sevyhealth/doctor/ipd/admit': 'IPD Admission',
  '/sevyhealth/doctor/discharge': 'Patient Discharge',
  '/sevyhealth/doctor/profile': 'Profile',
  '/sevyhealth/admin/dashboard': 'Dashboard',
  '/sevyhealth/admin/doctors': 'Manage Doctors',
  '/sevyhealth/admin/patients': 'Manage Patients',
  '/sevyhealth/admin/beds': 'Beds & Wards',
  '/sevyhealth/admin/reports': 'Reports & Analytics',
  '/sevyhealth/admin/profile': 'Profile',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = PAGE_TITLES[pathname.replace(/\/+$/, '') || '/'];
    document.title = pageTitle ? `${pageTitle} | Sevysis` : 'Sevysis';
  }, [pathname]);

  return null;
}

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
      <PageTitle />
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