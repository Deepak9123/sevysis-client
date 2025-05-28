import React from "react";

const About = () => {
  return (
    <section className="bg-white px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Sevysis is a dynamic consultancy firm dedicated to delivering innovative solutions across various sectors, with a strong focus on digital transformation and human-centered services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Consultancy Services</h2>
          <p className="mb-4">
            At Sevysis, we specialize in providing expert consultancy services across multiple domains including education management, hospital & pathlab automation, and enterprise software solutions. We partner with businesses and institutions to streamline operations, enhance productivity, and leverage modern technologies to meet their unique goals.
          </p>
          <p>
            Our team combines deep domain knowledge with technical expertise to offer end-to-end consulting, from requirement analysis to deployment and support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Role in Healthcare</h2>
          <p className="mb-4">
            We are actively engaged in the healthcare sector through our specialized digital products designed for hospitals, diagnostics centers, and pathology labs. Our solutions include appointment scheduling, patient records management, reporting modules, and more — all tailored to meet modern healthcare challenges.
          </p>
          <p>
            By combining our consultancy approach with healthcare innovation, we aim to improve patient care, operational efficiency, and regulatory compliance for medical institutions.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Why Choose Sevysis?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether you're a school, hospital, enterprise, or startup, Sevysis is your trusted partner in digital excellence. Our commitment to quality, innovation, and customer satisfaction drives us to deliver outstanding results for every client.
        </p>
      </div>
    </section>
  );
};

export default About;
