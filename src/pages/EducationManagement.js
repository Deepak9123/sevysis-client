import React from "react";
import SliderSection from "../components/SliderSection";

const sections = [
  {
    title: "Student Management Solution",
    text: `A Student Management Solution (SMS) is a comprehensive software system designed to streamline and optimize various administrative tasks related to managing students in educational institutions...`,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Faculty Management Solution",
    text: `A Faculty Management Solution (FMS) is a specialized software system designed to assist educational institutions in effectively managing their faculty members...`,
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Admission and Enquiry Management",
    text: `An Admission and Enquiry Management Solution (AEMS) is a software system designed to streamline and automate the process of handling inquiries from prospective students...`,
    image:
      "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "School Management Solution",
    text: `A School Management Solution (SMS) is a comprehensive software system designed to streamline and optimize various administrative tasks related to managing a school or educational institution...`,
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2048&auto=format&fit=crop",
  },
  {
    title: "Attendance Tracking Solution",
    text: `An Attendance Tracking Solution (ATS) is a software system designed to automate and streamline the process of recording and managing attendance...`,
    image:
      "https://www.bizzabo.com/wp-content/uploads/2023/06/Why-You-Need-Attendance-Tracking-Software-for-Events_16x9.png",
  },
  {
    title: "Grading and Transcript Solution",
    text: `A Grading and Transcript Solution (GTS) is a software system designed to automate and streamline the process of grading students' academic performance and generating official transcripts...`,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Campus Management Solution",
    text: `A Campus Management Solution (CMS) is a comprehensive software system designed to streamline and optimize various administrative tasks and processes within an educational institution's campus...`,
    image:
      "https://images.unsplash.com/photo-1567878874660-beba6dbb1762?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Admin Analytics Reporting Solution",
    text: `An Admin, Analytical, and Reporting Solution (AARS) is a software system designed to assist administrators in managing various aspects of an organization or institution...`,
    image:
      "https://images.unsplash.com/photo-1501159599894-155982264a55?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Account and Finance Management",
    text: `An Account and Finance Management Solution (AFMS) is a software system designed to streamline and automate financial processes...`,
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Course and Curriculum Management",
    text: `Course and Curriculum Management Solution (CCMS) is a software system designed to facilitate the creation, management, and delivery of academic courses and curriculum...`,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Library Management",
    text: `Library Management refers to the systematic organization and administration of library resources and services to meet the information needs of patrons...`,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Communication and Collaboration Solution",
    text: `A Communication and Collaboration Solution (CCS) enhances information flow, teamwork, and engagement in educational institutions via tools such as messaging platforms, video conferencing, forums, etc.`,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
  },
];

const EducationManagement = () => {
  return (
    <div className="space-y-12 p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Education Management Solutions
      </h1>
      {sections.map((section, idx) => (
        <SliderSection key={idx} {...section} reverse={idx % 2 !== 0} />
      ))}
    </div>
  );
};

export default EducationManagement;
