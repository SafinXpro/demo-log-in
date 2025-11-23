import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, role, user } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const getDashboardLink = () => {
    if (role === 'admin') return '/admin/dashboard'
    if (role === 'customer' || role === 'user') return '/customer/panel'
    return '/'
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-white to-orange-600 text-black mx-auto">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between w-11/12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            className="w-12 h-12"
            src="/assets/Since_1999_20250918_230702_0000__1_-removebg-preview.png"
            alt="Sun Star logo"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden p-2 rounded-md bg-white/80 text-gray-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-black">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-medium px-3 py-1 rounded hover:bg-white/60 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Link
                to={getDashboardLink()}
                className="bg-orange-400 text-white rounded-full px-4 py-2 font-bold hover:bg-orange-500 transition"
              >
                {user?.name || 'User'}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white rounded-full px-4 py-2 font-bold hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-400 text-white rounded-full px-4 py-2 font-bold hover:bg-orange-500 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white/90 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-medium py-2 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to={getDashboardLink()}
                      className="block w-full bg-orange-400 text-white text-center rounded px-4 py-2 font-bold mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {user?.name || 'User'}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full bg-gray-600 text-white rounded px-4 py-2 font-bold"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block w-full bg-orange-400 text-white text-center rounded px-4 py-2 font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
