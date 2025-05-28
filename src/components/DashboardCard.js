export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}