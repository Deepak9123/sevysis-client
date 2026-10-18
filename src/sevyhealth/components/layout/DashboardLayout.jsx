import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const PAGE_TITLES = {
  'sevyhealth/patient/dashboard': 'Dashboard',
  'sevyhealth/patient/appointments': 'Appointments',
  'sevyhealth/patient/prescriptions': 'Prescriptions',
  'sevyhealth/patient/reports': 'Lab Reports',
  'sevyhealth/patient/billing': 'Billing',
  'sevyhealth/doctor/dashboard': 'Dashboard',
  'sevyhealth/doctor/opd': 'OPD Consultation',
  'sevyhealth/doctor/ipd/monitor': 'IPD Monitoring',
  'sevyhealth/doctor/ipd/admit': 'IPD Admission',
  'sevyhealth/doctor/discharge': 'Patient Discharge',
  'sevyhealth/patient/profile': 'Profile',
  'sevyhealth/doctor/profile': 'Profile',
  'sevyhealth/admin/profile': 'Profile',
  'sevyhealth/admin/dashboard': 'Dashboard',
  'sevyhealth/admin/doctors': 'Manage Doctors',
  'sevyhealth/admin/patients': 'Manage Patients',
  'sevyhealth/admin/beds': 'Beds & Wards',
  'sevyhealth/admin/reports': 'Reports & Analytics',
}

export default function DashboardLayout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('sidebarCollapsed') === 'true'
  })
  const title = PAGE_TITLES[location.pathname] ?? 'Sevysis'

  useEffect(() => {
    window.localStorage.setItem('sidebarCollapsed', sidebarCollapsed ? 'true' : 'false')
  }, [sidebarCollapsed])

  return (
    <div className="portal-shell flex min-h-screen bg-slate-100">
      <Sidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={() => setSidebarCollapsed(curr => !curr)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={title} onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 px-4 py-6 md:px-6 md:py-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
