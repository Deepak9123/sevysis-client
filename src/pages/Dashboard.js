import DashboardCard from '../components/DashboardCard';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="Projects" value="12" />
        <DashboardCard title="Clients" value="8" />
        <DashboardCard title="Team Members" value="5" />
      </div>
    </div>
  );
}