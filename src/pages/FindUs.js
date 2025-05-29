import React from "react";

const FindUs = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
          <ul className="flex justify-center space-x-2 text-blue-600 list-none">
          <li>
            <a href="/">Sevysis</a>
          </li>
          <li className="text-gray-500 select-none">/</li>
          <li>
            <a href="/find-us">Get in touch</a>
          </li>
        </ul>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.774120508875!2d73.92537305673889!3d18.552758068801957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711096316048!2m1!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sevysis Location"
              className="rounded shadow-md"
            ></iframe>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* Contact Us */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-xl font-bold bg-gray-800 text-white p-2 mb-4">Contact us today</h2>
              <h4 className="text-lg text-blue-600">Phone: +91 93073 17516</h4>
              <h5 className="text-blue-600 mb-2">Mob.no: +91 78877 11309</h5>
              <a
                href="mailto:hr@sevysis.com"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-2"
              >
                hr@sevysis.com
              </a>
            </div>

            {/* Office Info */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-xl font-bold bg-gray-800 text-white p-2 mb-4">Visit Our Office</h2>
              <h4 className="text-lg text-blue-600">Kharadi, Pune-Nagar highway MH</h4>
              <h5 className="text-blue-600 mb-2">Pune-411014</h5>
              <a
                href="https://maps.app.goo.gl/aVY6DS8bYnfovdqh6"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-2"
                target="_blank" rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-xl font-bold bg-gray-800 text-white p-2 mb-4">Be Social</h2>
              <h4 className="text-lg text-blue-600">YouTube: Sevysis</h4>
              <h5 className="text-blue-600 mb-2">Instagram: sevysis</h5>
              <a
                href="https://www.linkedin.com/company/sevysis/"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-2"
                target="_blank" rel="noopener noreferrer"
              >
                Checkout on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindUs;
