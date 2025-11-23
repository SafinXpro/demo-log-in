import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { hasRole } from '@/utils/helpers'

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length > 0 && !hasRole(role, allowedRoles)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
