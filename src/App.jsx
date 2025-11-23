import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'
import CustomerLayout from './layouts/CustomerLayout'
import ProtectedRoute from './components/ProtectedRoute'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Services from './pages/Services'

// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// Admin Pages
import Dashboard from './pages/admin/Dashboard'
import Installation from './pages/admin/Installation'
import Maintenance from './pages/admin/Maintenance'
import ServiceHistory from './pages/admin/ServiceHistory'
import Technicians from './pages/admin/Technicians'
import Settings from './pages/admin/Settings'

// Customer Pages
import CustomerPanel from './pages/customer/CustomerPanel'
import CustomerService from './pages/customer/CustomerService'
import CustomerSettings from './pages/customer/CustomerSettings'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin Routes - Protected */}
      <Route
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/installation" element={<Installation />} />
        <Route path="/admin/maintenance" element={<Maintenance />} />
        <Route path="/admin/service-history" element={<ServiceHistory />} />
        <Route path="/admin/technicians" element={<Technicians />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>

      {/* Customer Routes - Protected */}
      <Route
        element={
          <ProtectedRoute allowedRoles={['customer', 'user']}>
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/customer/panel" element={<CustomerPanel />} />
        <Route path="/customer/service" element={<CustomerService />} />
        <Route path="/customer/settings" element={<CustomerSettings />} />
      </Route>
    </Routes>
  )
}

export default App
