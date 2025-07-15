import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b pb-2">
        Company Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Projects" value="12" />
        <DashboardCard title="Clients" value="8" />
        <DashboardCard title="Team Members" value="5" />
      </div>
    </div>
  );
}
