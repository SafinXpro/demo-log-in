import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-white flex items-center justify-center">
      <Outlet />
    </div>
  )
}

export default AuthLayout
