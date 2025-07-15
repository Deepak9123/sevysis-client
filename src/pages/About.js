import React from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"; // Adjust path if needed

// Icons
import { HeartHandshake, Lightbulb, Award, Linkedin, Twitter } from "lucide-react";

// Team Images
import AnkushImg from "../assets/Teams/Ankush.jpg";
import PranjaliImg from "../assets/Teams/Pranjali.jpg";
import KhushiImg from "../assets/Teams/Khushi_Chopra.jpeg";
import PriyankaImg from "../assets/Teams/Priyanka_Dey.jpeg";
import DeepakImg from "../assets/Teams/Deepak.jpeg";
import AboutStoryImg from "../assets/about-story.jpg"; // Add a relevant image for the story section

const teamMembers = [
  {
    name: "Ankush B.",
    role: "Founder & CEO",
    image: AnkushImg,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Deepak Kumar",
    role: "Chief Technology Officer",
    image: DeepakImg,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Pranjali W.",
    role: "UI/UX Designer",
    image: PranjaliImg,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Khushi Chopra",
    role: "Software Intern",
    image: KhushiImg,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priyanka Dey",
    role: "Software Intern",
    image: PriyankaImg,
    socials: { linkedin: "#", twitter: "#" },
  },
];

const About = () => {
  const [storyRef, isStoryVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [valuesRef, isValuesVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [teamRef, isTeamVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            About Sevysis
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            We are a dynamic consultancy delivering innovative solutions across healthcare, education, and enterprise software to transform challenges into digital opportunities.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className={`py-24 bg-slate-50 transition-opacity duration-1000 ${isStoryVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Journey & Commitment
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded with a vision to simplify complex problems through technology, Sevysis began its journey by identifying critical gaps in key sectors. We specialize in expert consultancy for education management, hospital automation, and enterprise software solutions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From initial strategy to final deployment, our consultants provide deep technical expertise and practical insights. We are committed to building long-term partnerships and driving success through tailored, impactful solutions.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={AboutStoryImg} alt="Team collaborating on a project" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className={`py-24 bg-white transition-opacity duration-1000 ${isValuesVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Core Values</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">The principles that guide our work and define our commitment to clients.</p>
          <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
            {[
              { icon: <Lightbulb />, title: "Innovation", desc: "We thrive on forward-thinking solutions that push boundaries and deliver exceptional results." },
              { icon: <HeartHandshake />, title: "Partnership", desc: "We believe in collaboration, working closely with our clients to achieve shared goals." },
              { icon: <Award />, title: "Excellence", desc: "We are driven by a passion for quality and an unwavering commitment to customer success." },
            ].map((value, idx) => (
              <div key={value.title} className={`p-8 bg-slate-50/50 rounded-xl border border-slate-200 transition-opacity duration-1000 ${isValuesVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${idx * 200}ms` }}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                  {React.cloneElement(value.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      {/* <section ref={teamRef} className={`py-24 bg-slate-50 transition-opacity duration-1000 ${isTeamVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Meet Our Team</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">The dedicated professionals driving our mission forward.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${isTeamVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative pt-[100%]">
                    <img src={member.image} alt={member.name} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-4 relative">
                    <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                    <p className="text-sm text-purple-600 font-medium">{member.role}</p>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 bg-white px-3 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:-bottom-5 transition-all duration-300">
                        <a href={member.socials.linkedin} className="text-slate-500 hover:text-blue-700"><Linkedin size={20} /></a>
                        <a href={member.socials.twitter} className="text-slate-500 hover:text-blue-500"><Twitter size={20} /></a>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Call to Action Section */}
      <section ref={ctaRef} className={`bg-white transition-opacity duration-1000 ${isCtaVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Let's build something great together. Reach out to our team to discuss your project and discover how we can help.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;