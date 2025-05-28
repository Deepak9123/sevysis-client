import React from "react";
import {
  BsCheckCircleFill,
  BsStarFill,
  BsLightbulbFill,
} from "react-icons/bs";

const HrmsSolution = () => {
  return (
    <section className="py-10 bg-white text-gray-800">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">HRMS Solutions</h1>
        <p className="mb-6 text-justify">
          HRMS (Human Resource Management System) software is a comprehensive
          web-based tool designed to streamline and automate various HR processes
          within all scales of organizations. HRMS software serves as a centralized
          database for storing employee information, including personal details, contact
          information, job history, performance reviews, and salary details.
          HRMS software aims to enhance HR processes, improve employee
          engagement, and optimize workforce management for organizations of all
          sizes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="space-y-3 text-base font-medium">
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Recruitment & applicant tracking
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Onboarding
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Time & attendance tracking
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Payroll Management
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Performance Management
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Training & development
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsCheckCircleFill className="text-green-600" />
            Admin Benefits
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsStarFill className="text-yellow-500" />
            Employee self service
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsLightbulbFill className="text-indigo-500" />
            Analytics and reporting
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsLightbulbFill className="text-indigo-500" />
            Compliance management
          </li>
          <li className="flex items-center gap-2 bg-gray-100 p-2 rounded shadow-sm">
            <BsLightbulbFill className="text-indigo-500" />
            Integration capabilities and many more custom development
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HrmsSolution;
