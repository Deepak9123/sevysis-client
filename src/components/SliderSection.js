import React from "react";

const SliderSection = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]"
        />
      </div>
    </div>
  );
};

export default SliderSection;
