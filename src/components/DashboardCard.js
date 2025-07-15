import { Briefcase, Users, User } from "lucide-react"; // Use appropriate icons
import React from "react";

const iconMap = {
  Projects: <Briefcase className="w-8 h-8 text-blue-600" />,
  Clients: <Users className="w-8 h-8 text-green-600" />,
  "Team Members": <User className="w-8 h-8 text-purple-600" />,
};

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center transform hover:scale-[1.02] transition-transform duration-300 border border-slate-100 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        {iconMap[title] || <div className="w-8 h-8" />} {/* fallback */}
      </div>
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
      <p className="text-3xl font-extrabold text-gray-900 mt-2">{value}</p>
    </div>
  );
}
