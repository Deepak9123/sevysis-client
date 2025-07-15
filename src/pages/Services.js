import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  CloudCog,
  Briefcase,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
// Make sure the path is correct based on your file structure
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"; 

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business challenges and drive growth.",
    },
    {
      icon: <CloudCog size={32} />,
      title: "Cloud Integration",
      description: "Seamlessly integrate and manage your applications and data across public, private, and hybrid clouds.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Enterprise Solutions",
      description: "Robust, scalable, and secure enterprise-level applications to streamline your complex operations.",
    },
    {
      icon: <Users size={32} />,
      title: "IT Consulting",
      description: "Strategic IT guidance to help you make informed decisions and align your technology with your business goals.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Business Intelligence",
      description: "Turn your data into actionable insights with powerful analytics and data visualization tools.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with our comprehensive cybersecurity assessments and solutions.",
    },
  ];

  // Hooks for scroll animations
  const [servicesRef, isServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 pt-32 pb-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We provide a wide range of technology services to empower your business and accelerate your journey to digital excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-purple-500 ${isServicesVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className={`max-w-4xl mx-auto ${isCtaVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to build your next big idea?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Let's discuss how our expertise can help you achieve your goals. Contact us today for a free consultation.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}