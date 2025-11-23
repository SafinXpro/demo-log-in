import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogOut, Bell } from 'lucide-react'
import { logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'

const AdminHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useAuth()

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, {user?.name || 'Admin'}</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-orange-600 transition relative">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <Button variant="secondary" onClick={handleLogout}>
            <LogOut size={18} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
