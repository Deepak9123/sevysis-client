import React from "react";

const HealthcarePathlab = () => {
  return (
    <div className="space-y-16 py-10 px-4 md:px-6 lg:px-8">
      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Electronic Healthcare Record Solution
          </h2>
          <p className="text-gray-700">
            An Electronic Health Records (EHR) system enables healthcare providers to securely manage patient information, streamline clinical workflows, and enhance patient outcomes. 
            <br /><br />
            The system stores patient demographics, visit histories, prescriptions, immunizations, allergies, and lab results. It facilitates smoother communication between departments and offers data-driven insights for better diagnosis and treatment planning.
          </p>
        </div>
        <figure className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Electronic healthcare record"
            className="rounded shadow-lg w-full max-w-md mx-auto"
          />
        </figure>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Patient & Doctor Portal Development
          </h2>
          <p className="text-gray-700 mb-2">
            We design and develop intuitive patient and doctor portals that facilitate appointment scheduling, real-time consultation, report tracking, and e-prescriptions. These portals bridge the communication gap between doctors and patients while maintaining privacy and compliance.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Secure login for doctors and patients</li>
            <li>Online appointment booking and reminders</li>
            <li>Health history and prescription tracking</li>
          </ul>
        </div>
        <figure className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Patient portal design"
            className="rounded shadow-lg w-full max-w-md mx-auto"
          />
        </figure>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Healthcare Mobile App Solutions
          </h2>
          <p className="text-gray-700 mb-2">
            We build cross-platform mobile apps for hospitals, clinics, and diagnostic labs that empower patients and doctors on the go. These apps allow for test booking, telemedicine, health monitoring, and alerts.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Popular Use Cases:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Telehealth consultations</li>
            <li>Online lab test booking and tracking</li>
            <li>Digital prescriptions and notifications</li>
          </ul>
        </div>
        <figure className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1572996489084-bd293caab387?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Healthcare mobile app"
            className="rounded shadow-lg w-full max-w-md mx-auto"
          />
        </figure>
      </div>

      {/* SECTION 4 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Diagnostic Lab & Pathology Management
          </h2>
          <p className="text-gray-700">
            We offer robust solutions for pathology labs to manage test orders, samples, technician assignments, and report generation. From barcoded sample tracking to digital delivery of reports, our systems streamline lab workflows efficiently.
          </p>
        </div>
        <figure className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Pathology lab management"
            className="rounded shadow-lg w-full max-w-md mx-auto"
          />
        </figure>
      </div>

      {/* SECTION 5 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Health System Modernization & Integration
          </h2>
          <p className="text-gray-700">
            We help hospitals and diagnostic labs modernize legacy systems and integrate with third-party health APIs (like HL7, FHIR). Our experts enable seamless communication between departments, diagnostics, pharmacies, and billing to create a unified healthcare ecosystem.
          </p>
        </div>
        <figure className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1579684288402-e3e337bcc7af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Healthcare system integration"
            className="rounded shadow-lg w-full max-w-md mx-auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default HealthcarePathlab;
