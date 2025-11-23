import { useSelector } from 'react-redux'
import { selectCurrentUser, selectIsAuthenticated, selectUserRole } from '@/store/slices/authSlice'

export const useAuth = () => {
  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const role = useSelector(selectUserRole)

  return {
    user,
    isAuthenticated,
    role,
    isAdmin: role === 'admin',
    isCustomer: role === 'customer' || role === 'user',
  }
}
