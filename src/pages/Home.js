import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../index.css'; // assuming your custom styles or tailwind are here
import img1 from '../assets/pexels-huseyn-kamaladdin-667838.jpg';
import img2 from '../assets/5206.jpg';
import img3 from '../assets/pexels-max-vakhtbovycn-7750123.jpg';

function Home() {
  const [monthlyUsers, setMonthlyUsers] = useState(0);

  useEffect(() => {
    let count = 0;
    const target = 800;
    const increment = 10;
    const intervalTime = 30;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setMonthlyUsers(count);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10">

      {/* Hero Carousel */}
      <section className="carousal max-w-5xl mx-auto">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3800} showStatus={false}>
          <div className="relative">
            <img src={img1} alt="Slide 1" className="mx-auto h-80 object-cover rounded-lg" />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 text-center text-black font-bold rounded">
              Our primary areas of competence are business intelligence, technology, and developing web and mobile applications.
            </p>
          </div>
          <div className="relative">
            <img src={img2} alt="Slide 2" className="mx-auto h-80 object-cover rounded-lg" />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 text-center text-black font-bold rounded">
              Our expertise is in providing services for mobile app development, CMS, and web development, among other things.
            </p>
          </div>
          <div className="relative">
            <img src={img3} alt="Slide 3" className="mx-auto h-80 object-cover rounded-lg" />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 text-center text-black font-bold rounded">
              We believe innovation and collective knowledge can transform all our futures with greater purpose.
            </p>
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="text-center px-4 md:px-20 py-10 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">ABOUT</h1>
        <p className="mb-4">
          Sevysis is an IT services, consulting, and business solutions organization that has been partnering with many businesses...
        </p>
        <p className="mb-6">
          Our expertise spans a variety of fields including education, ATS, food, and healthcare...
        </p>
        <Link to="/about">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Explore Our Services</button>
        </Link>
      </section>

      {/* Vision / Mission / Goals */}
      <section className="px-4 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-6">Vision & Mission</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Vision',
              desc: 'To create simple, easy and innovative services for our nation from the common man’s perspective...',
              img: 'https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg',
            },
            {
              title: 'Mission',
              desc: 'Multitasking team committed to continuously provide the most simple, easy and Effective solutions...',
              img: 'https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg',
            },
            {
              title: 'Goals',
              desc: 'Our goals are to nurture a passion for lifelong learning, technological innovation, and foster community...',
              img: 'https://img.freepik.com/free-vector/ambition-abstract-concept_335657-3013.jpg',
            }
          ].map(({ title, desc, img }) => (
            <div key={title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm mt-2">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-2xl font-bold mb-8">What Our Clients Say</h1>
        <div className="grid md:grid-cols-3 gap-6 px-4 md:px-20">
          {[
            {
              name: 'Sarjan Construction Pvt. Ltd.',
              loc: 'Ahmedabad, GJ',
              quote: 'I had a great experience working with Sevysis...'
            },
            {
              name: 'Kidszone English Medium School',
              loc: 'Akola, MH',
              quote: 'Sevysis is our Trusted solution partner...'
            },
            {
              name: 'Shiv Enterprises',
              loc: 'Akola, MH',
              quote: 'The Sevysis team is highly collaborative...'
            }
          ].map((client, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h6 className="font-semibold mb-1">{client.name}</h6>
              <p className="text-xs mb-3 text-gray-500">{client.loc}</p>
              <p className="text-sm italic">"{client.quote}"</p>
              <p className="text-right text-sm mt-3 font-medium">- {client.name.split(' ')[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indicators */}
      <section className="flex flex-wrap justify-center gap-6 text-center py-10 bg-white">
        <div className="w-40 p-4 bg-blue-600 text-white rounded-lg">
          <div className="text-2xl font-bold">25+</div>
          <div className="text-sm">Customer Surveyed</div>
        </div>
        <div className="w-40 p-4 bg-blue-600 text-white rounded-lg">
          <div className="text-2xl font-bold">10+</div>
          <div className="text-sm">Services Provided</div>
        </div>
        <div className="w-40 p-4 bg-blue-600 text-white rounded-lg">
          <div className="text-2xl font-bold">{monthlyUsers}+</div>
          <div className="text-sm">Monthly Users</div>
        </div>
        <div className="w-40 p-4 bg-blue-600 text-white rounded-lg">
          <div className="text-2xl font-bold">20+</div>
          <div className="text-sm">Our Projects</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
