import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogOut, Bell, Home } from 'lucide-react'
import { logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'

const CustomerHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useAuth()

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Customer Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome, {user?.name || 'Customer'}</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-orange-600 transition relative">
            <Bell size={24} />
          </button>

          <Button variant="outline" onClick={handleGoHome}>
            <Home size={18} className="mr-2" />
            Home
          </Button>

          <Button variant="secondary" onClick={handleLogout}>
            <LogOut size={18} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

export default CustomerHeader
