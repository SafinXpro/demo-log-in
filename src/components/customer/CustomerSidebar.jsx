import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Wrench, Settings } from 'lucide-react'
import { cn } from '@/utils/helpers'

const CustomerSidebar = () => {
  const location = useLocation()

  const menuItems = [
    { to: '/customer/panel', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/customer/service', label: 'Request Service', icon: <Wrench size={20} /> },
    { to: '/customer/settings', label: 'Settings', icon: <Settings size={20} /> },
  ]

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img
            className="w-10 h-10"
            src="/assets/Since_1999_20250918_230702_0000__1_-removebg-preview.png"
            alt="Logo"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Customer Panel</h2>
            <p className="text-xs text-gray-500">Sun Star Elevator</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                location.pathname === item.to
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default CustomerSidebar
