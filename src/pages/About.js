import React from "react";
import AnkushImg from "../assets/Teams/Ankush.jpg";
import PranjaliImg from "../assets/Teams/Pranjali.jpg";
import KhushiImg from "../assets/Teams/Khushi_Chopra.jpeg";
import PriyankaImg from "../assets/Teams/Priyanka_Dey.jpeg";
import DeepakImg from "../assets/Teams/Deepak.jpeg";

const teamMembers = [
  {
    name: "Ankush B.",
    role: "Founder & CEO",
    image: AnkushImg,
  },
  {
    name: "Pranjali W.",
    role: "UI UX Designer",
    image: PranjaliImg,
  },
  {
    name: "Khushi Chopra",
    role: "Interns",
    image: KhushiImg,
  },
  {
    name: "Priyanka Dey",
    role: "Interns",
    image: PriyankaImg,
  },
  {
    name: "Deepak Kumar",
    role: "Chief Technology Officer",
    image: DeepakImg,
  },
];

const About = () => {
  return (
    <section className="bg-white px-6 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Sevysis is a dynamic consultancy firm delivering innovative solutions
          across healthcare, education, enterprise software, and more —
          transforming challenges into digital opportunities.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Our Consultancy Services
          </h2>
          <p className="mb-4 leading-relaxed">
            We specialize in expert consultancy across education management,
            hospital & pathlab automation, and enterprise software solutions.
            Our goal is to streamline operations and modernize businesses
            through technology.
          </p>
          <p className="leading-relaxed">
            From planning to deployment and support, our consultants bring
            technical depth and practical insights to every partnership.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Our Role in Healthcare
          </h2>
          <p className="mb-4 leading-relaxed">
            Sevysis is transforming healthcare through digital tools for
            hospitals, diagnostics centers, and labs. We build systems for
            appointment scheduling, patient records, and real-time reporting
            tailored to your workflow.
          </p>
          <p className="leading-relaxed">
            Our healthcare solutions are built to improve care quality,
            efficiency, and compliance — empowering institutions to focus on
            what matters most: patients.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Why Choose Sevysis?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Whether you're a school, hospital, enterprise, or startup, Sevysis is
          your trusted partner in digital excellence. Our team is driven by a
          passion for quality, customer success, and forward-thinking
          innovation.
        </p>
      </div>

      {/* Meet Our Team */}
      {/* <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-4 w-48 hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-base font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default About;
