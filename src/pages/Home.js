import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  Users,
  Award,
  Target,
  Eye,
  Zap,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  HeartPulse,
  Check,
  Quote,
  Briefcase,
  GraduationCap,
  ClipboardList,
  UtensilsCrossed,
  Gift,
} from "lucide-react";

const AnimateOnScroll = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

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
  }, [end, duration, totalFrames, frameRate]);

  return count;
};

// Custom Hook for observing element intersection
const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const refCurrent = containerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Observe only once
      }
    }, options);

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [options]);

  return [containerRef, isVisible];
};

function Home() {
  const monthlyUsers = useCountUp(800);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs for intersection observers
  // Removed unused aboutRef and isAboutVisible
  const [visionRef, isVisionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [statsRef, isStatsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

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
  }, [carouselData.length]);

  return (
    <div className="overflow-x-hidden bg-slate-50">
      <style>{`
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(4%, -6%) scale(1.08); }
          66% { transform: translate(-3%, 4%) scale(0.95); }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.35); }
          70% { box-shadow: 0 0 0 12px rgba(99,102,241,0); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        .animate-blob-drift { animation: blobDrift 14s ease-in-out infinite; }
        .animate-blob-drift-slow { animation: blobDrift 20s ease-in-out infinite; }
        .animate-trust-marquee { animation: marqueeScroll 28s linear infinite; }
        .animate-pulse-ring { animation: pulseRing 2.4s ease-out infinite; }
      `}</style>
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
              <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 md:px-20">
                <div
                  className={`max-w-2xl text-white ${
                    idx === currentSlide ? "animate-fade-in-up" : ""
                  }`}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p
                    className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90 font-light"
                    style={{ animationDelay: "200ms" }}
                  >
                    {slide.subtitle}
                  </p>
                  <p
                    className="text-base sm:text-lg mb-8 opacity-80 leading-relaxed"
                    style={{ animationDelay: "400ms" }}
                  >
                    {slide.desc}
                  </p>
                  <Link
                    to="/services/design-development"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl text-sm sm:text-base"
                    style={{ animationDelay: "600ms" }}
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated gradient mesh accents */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-fuchsia-500/30 rounded-full blur-3xl mix-blend-screen animate-blob-drift"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/30 rounded-full blur-3xl mix-blend-screen animate-blob-drift-slow"></div>
        </div>

        {/* Floating trust chips */}
        <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-4 sm:left-8 md:left-20 z-30 gap-3">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg">
            <Award className="w-4 h-4 text-amber-300" />
            10+ Services Delivered
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg">
            <Users className="w-4 h-4 text-fuchsia-300" />
            25+ Happy Clients
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-6 right-6 md:right-10 z-30 flex-col items-center gap-1 text-white/70">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? carouselData.length - 1 : prev - 1
            )
          }
          className="absolute top-1/2 left-2 sm:left-4 md:left-6 z-30 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/30 opacity-40 hover:opacity-100 transition-all duration-300 transform -translate-y-1/2"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % carouselData.length)
          }
          className="absolute top-1/2 right-2 sm:right-4 md:right-6 z-30 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/30 opacity-40 hover:opacity-100 transition-all duration-300 transform -translate-y-1/2"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SevyHealth Product Spotlight */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-200/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-200/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <AnimateOnScroll>
            <div className="relative grid md:grid-cols-2 gap-10 md:gap-14 items-center bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl">
              {/* Free trial ribbon */}
              <div className="absolute -top-3 sm:-top-4 right-4 sm:right-10 z-20 flex items-center gap-1.5 bg-amber-400 text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg rotate-2">
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                45 Days Free
              </div>

              {/* Copy */}
              <div className="text-white">
                <span className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  New from Sevysis
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Meet <span className="text-emerald-400">SevyHealth</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-md">
                  Our newest product brings smarter, more human healthcare
                  experiences to patients and care teams — built with the
                  same care we put into every Sevysis solution.
                </p>

                <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-xl text-sm sm:text-base font-semibold mb-6 sm:mb-8 max-w-md">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Free for the first 45 days of usage — no cost to get started.
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                  {["Patient-first design", "Built for care teams", "Secure by design"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-200 px-3 py-1.5 rounded-full text-xs sm:text-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <Link
                  to="/sevyhealth"
                  className="inline-flex items-center gap-2 bg-emerald-400 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-emerald-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30 text-sm sm:text-base"
                >
                  Start Your Free 45 Days
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>

              {/* App preview mockup */}
              <Link to="/sevyhealth" className="relative block group" aria-label="Open SevyHealth">
                <div className="bg-slate-800/60 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm transform transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/70 border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"></span>
                    <span className="ml-3 text-[10px] sm:text-xs text-slate-400 font-mono truncate">
                      SevyHealth
                    </span>
                  </div>
                  {/* Mock dashboard */}
                  <div className="p-5 sm:p-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-400/15 flex items-center justify-center">
                        <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-28 sm:w-32 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-16 sm:w-20 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[60, 85, 40].map((h, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/5 rounded-xl p-2.5 sm:p-3"
                        >
                          <div className="h-1.5 w-8 bg-white/15 rounded-full mb-3"></div>
                          <div className="h-12 sm:h-14 flex items-end">
                            <div
                              className="w-full bg-gradient-to-t from-emerald-400 to-teal-300 rounded-md"
                              style={{ height: `${h}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-emerald-400 text-slate-900 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300">
                  Live now ✦
                </div>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Marquee */}
      <section className="relative py-6 sm:py-8 bg-slate-900 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        <div className="flex whitespace-nowrap animate-trust-marquee">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex items-center shrink-0">
              {[
                "Sarjan Construction Pvt. Ltd.",
                "Kidszone English Medium School",
                "Shiv Enterprises",
                "Sarjan Construction Pvt. Ltd.",
                "Kidszone English Medium School",
                "Shiv Enterprises",
              ].map((name, i) => (
                <span
                  key={`${loop}-${i}`}
                  className="flex items-center gap-2 sm:gap-3 px-6 sm:px-10 text-slate-400 text-sm sm:text-base font-medium"
                >
                  <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                  {name}
                  <span className="text-slate-600 ml-6 sm:ml-10">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative mb-8 md:mb-0">
                <div className="absolute -top-6 -left-6 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-indigo-200 to-fuchsia-200 rounded-full blur-3xl opacity-70 animate-blob-drift-slow -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80"
                  alt="Team collaborating"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current" />
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-none">
                      4.9/5
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">
                      Client Rating
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <h2 className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                About Us
              </h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Your Partner in Digital Transformation
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                Sevysis is an IT services, consulting, and business solutions
                organization that has been partnering with many businesses to
                transform their digital presence and operational efficiency.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Our expertise spans a variety of fields including education,
                ATS, food, and healthcare, delivering innovative solutions that
                drive meaningful impact across industries.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {[
                  { label: "Education", icon: <GraduationCap />, color: "text-indigo-600 bg-indigo-50" },
                  { label: "ATS", icon: <ClipboardList />, color: "text-violet-600 bg-violet-50" },
                  { label: "Food", icon: <UtensilsCrossed />, color: "text-fuchsia-600 bg-fuchsia-50" },
                  { label: "Healthcare", icon: <HeartPulse />, color: "text-emerald-600 bg-emerald-50" },
                ].map(({ label, icon, color }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-1.5 ${color} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold`}
                  >
                    {React.cloneElement(icon, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" })}
                    {label}
                  </span>
                ))}
              </div>
              <a
                href="/services"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 text-sm sm:text-base"
              >
                Explore Our Services
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Goals Section */}
      <section
        ref={visionRef}
        className={`py-16 sm:py-20 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-slate-800 text-white transition-opacity duration-1000 ${
          isVisionVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Core Principles
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              The driving force behind our innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Our Vision",
                desc: "To create simple, easy and innovative services for our nation from the common man's perspective, making technology accessible to all.",
                icon: <Eye />,
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                title: "Our Mission",
                desc: "Multitasking team committed to continuously provide the most simple, easy and effective solutions that empower businesses to thrive.",
                icon: <Target />,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Our Goals",
                desc: "Our goals are to nurture a passion for lifelong learning, technological innovation, and foster community growth through digital transformation.",
                icon: <Zap />,
                gradient: "from-orange-500 to-amber-400",
              },
            ].map(({ title, desc, icon, gradient }, idx) => (
              <div
                key={title}
                className={`group relative overflow-hidden bg-slate-800/50 rounded-2xl p-6 sm:p-8 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 ${
                  isVisionVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                ></div>
                <div
                  className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-br ${gradient} text-white mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {React.cloneElement(icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className={`py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 transition-opacity duration-1000 ${
          isTestimonialsVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest">
              Testimonials
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarjan Construction Pvt. Ltd.",
                loc: "Ahmedabad, GJ",
                quote:
                  "I had a great experience working with Sevysis. Their innovative solutions transformed our business operations completely.",
                rating: 5,
                accent: "from-indigo-500 to-violet-500",
              },
              {
                name: "Kidszone English Medium School",
                loc: "Akola, MH",
                quote:
                  "Sevysis is our trusted solution partner. They delivered exceptional results that exceeded our expectations.",
                rating: 5,
                accent: "from-fuchsia-500 to-pink-500",
              },
              {
                name: "Shiv Enterprises",
                loc: "Pune, MH",
                quote:
                  "The Sevysis team is highly collaborative and professional. They understood our needs perfectly.",
                rating: 5,
                accent: "from-amber-500 to-orange-500",
              },
            ].map((client, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isTestimonialsVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${client.accent}`}
                ></div>
                <Quote className="w-8 h-8 text-slate-200 mb-2" />
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic mb-4 sm:mb-6 leading-relaxed">
                  "{client.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${client.accent} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-800 text-sm sm:text-base">
                      {client.name}
                    </h6>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {client.loc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`relative py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden transition-opacity duration-1000 ${
          isStatsVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="absolute -top-10 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-blob-drift"></div>
        <div className="absolute -bottom-16 right-10 w-56 h-56 sm:w-80 sm:h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-blob-drift-slow"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x md:divide-white/15">
            {[
              { value: "25+", label: "Customer Surveyed", icon: <Users /> },
              { value: "10+", label: "Services Provided", icon: <Award /> },
              {
                value: `${monthlyUsers}+`,
                label: "Monthly Users",
                icon: <Target />,
              },
              { value: "20+", label: "Our Projects", icon: <Zap /> },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group text-center transition-opacity duration-1000 ${
                  isStatsVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white/15 backdrop-blur-sm mb-2 sm:mb-3 text-white transition-transform duration-300 group-hover:scale-110">
                  {React.cloneElement(stat.icon, {
                    className: "w-7 h-7 sm:w-9 sm:h-9",
                  })}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-2 opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-600/40 via-fuchsia-600/30 to-amber-500/20 rounded-full blur-3xl animate-blob-drift"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-20 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Build Together
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto">
              Ready to bring your next project to life?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              Tell us what you're trying to build — we'll help you get there
              faster, with technology that actually fits your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-fuchsia-500/30 text-sm sm:text-base animate-pulse-ring"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Explore Our Services
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

export default Home;