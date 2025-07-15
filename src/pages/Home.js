import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  Target,
  Eye,
  Zap,
} from "lucide-react";

// Custom Hook for counting up numbers
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(end * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, totalFrames]);

  return count;
};

// Custom Hook for observing element intersection
const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Observe only once
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

function Home() {
  const monthlyUsers = useCountUp(800);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs for intersection observers
  const [aboutRef, isAboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [visionRef, isVisionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.1 });


  const carouselData = [
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      title: "Business Intelligence & Technology",
      subtitle: "Transforming data into actionable insights",
      desc: "Our primary areas of competence are business intelligence, technology, and developing web and mobile applications.",
    },
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
      title: "Web & Mobile Development",
      subtitle: "Creating digital experiences that matter",
      desc: "Our expertise is in providing services for mobile app development, CMS, and web development, among other things.",
    },
    {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      title: "Innovation & Collaboration",
      subtitle: "Building the future together",
      desc: "We believe innovation and collective knowledge can transform all our futures with greater purpose.",
    },
  ];

  // Auto-play for carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Increased interval for a calmer feel
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* Hero Carousel */}
      <section className="relative w-full h-screen">
        <div className="relative h-full overflow-hidden">
          {carouselData.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
              <img
                src={slide.img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-start pl-8 md:pl-20">
                <div
                  className={`max-w-2xl text-white ${
                    idx === currentSlide ? "animate-fade-in-up" : ""
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 opacity-90 font-light" style={{ animationDelay: "200ms" }}>
                    {slide.subtitle}
                  </p>
                  <p className="text-lg mb-8 opacity-80 leading-relaxed" style={{ animationDelay: "400ms" }}>
                    {slide.desc}
                  </p>
                  <Link
                    to="/services/design-development"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    style={{ animationDelay: "600ms" }}
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1))}
          className="absolute top-1/2 left-4 md:left-6 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-300 transform -translate-y-1/2 group"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselData.length)}
          className="absolute top-1/2 right-4 md:right-6 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-300 transform -translate-y-1/2 group"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
<section
  ref={aboutRef}
  className={`py-24 bg-white transition-opacity duration-1000 ${
    isAboutVisible ? "animate-fade-in-up" : "opacity-0"
  }`}
>
  <div className="container mx-auto px-6 md:px-20">
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">
        About Us
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800">
        Your Partner in Digital Transformation
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
        Sevysis is an IT services, consulting, and business solutions
        organization that has been partnering with many businesses to transform
        their digital presence and operational efficiency.
      </p>
      <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        Our expertise spans a variety of fields including education, ATS,
        food, and healthcare, delivering innovative solutions that drive
        meaningful impact across industries.
      </p>
      <Link
        to="/services"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
      >
        Explore Our Services
      </Link>
    </div>
  </div>
</section>

      {/* Vision / Mission / Goals Section */}
      <section
        ref={visionRef}
        className={`py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-slate-800 text-white transition-opacity duration-1000 ${isVisionVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Our Core Principles</h1>
            <p className="mt-4 text-lg text-slate-300">The driving force behind our innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Our Vision", desc: "To create simple, easy and innovative services for our nation from the common man's perspective, making technology accessible to all.", icon: <Eye />, gradient: "from-blue-500 to-cyan-400" },
              { title: "Our Mission", desc: "Multitasking team committed to continuously provide the most simple, easy and effective solutions that empower businesses to thrive.", icon: <Target />, gradient: "from-purple-500 to-pink-500" },
              { title: "Our Goals", desc: "Our goals are to nurture a passion for lifelong learning, technological innovation, and foster community growth through digital transformation.", icon: <Zap />, gradient: "from-orange-500 to-amber-400" },
            ].map(({ title, desc, icon, gradient }, idx) => (
              <div
                key={title}
                className={`bg-slate-800/50 rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 ${isVisionVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${gradient} text-white mb-6`}>
                  {React.cloneElement(icon, { className: "w-7 h-7" })}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <p className="text-slate-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className={`py-24 bg-gradient-to-br from-blue-50 to-purple-50 transition-opacity duration-1000 ${isTestimonialsVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Testimonials</h2>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarjan Construction Pvt. Ltd.", loc: "Ahmedabad, GJ", quote: "I had a great experience working with Sevysis. Their innovative solutions transformed our business operations completely.", rating: 5 },
              { name: "Kidszone English Medium School", loc: "Akola, MH", quote: "Sevysis is our trusted solution partner. They delivered exceptional results that exceeded our expectations.", rating: 5 },
              { name: "Shiv Enterprises", loc: "Akola, MH", quote: "The Sevysis team is highly collaborative and professional. They understood our needs perfectly.", rating: 5 },
            ].map((client, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${isTestimonialsVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(client.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{client.quote}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <h6 className="font-bold text-slate-800">{client.name}</h6>
                  <p className="text-sm text-slate-500">{client.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-opacity duration-1000 ${isStatsVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Customer Surveyed", icon: <Users /> },
              { value: "10+", label: "Services Provided", icon: <Award /> },
              { value: `${monthlyUsers}+`, label: "Monthly Users", icon: <Target /> },
              { value: "20+", label: "Our Projects", icon: <Zap /> },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`text-center transition-opacity duration-1000 ${isStatsVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex justify-center mb-3 text-white/90">
                  {React.cloneElement(stat.icon, { className: "w-10 h-10" })}
                </div>
                <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider mt-2 opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;