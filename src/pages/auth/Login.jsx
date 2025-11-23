import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/store/slices/authSlice'
import { loginSchema } from '@/utils/validationSchemas'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Mock login - replace with actual API call
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: data.email,
      }
      const mockToken = 'mock-jwt-token-' + Date.now()
      const mockRole = data.email.includes('admin') ? 'admin' : 'customer'

      dispatch(setCredentials({ user: mockUser, token: mockToken, role: mockRole }))
      
      toast.success('Login successful! Welcome back.')
      
      // Redirect based on role
      if (mockRole === 'admin') {
        navigate('/admin/dashboard')
      } else {
        navigate('/customer/panel')
      }
    } catch (error) {
      toast.error('Invalid email or password')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md"
    >
      <Card>
        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Logo / Title */}
        <div className="text-center mb-6">
          <div className="h-24 w-36 mx-auto">
            <img
              className="w-full h-full object-contain"
              src="/assets/Since_1999_20250918_230702_0000__1_-removebg-preview.png"
              alt="Sun Star Logo"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Welcome Back</h2>
          <p className="text-gray-500 mt-1">Please login to continue.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register('password')}
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600 text-sm cursor-pointer">
              <input type="checkbox" className="mr-2 accent-orange-400" /> Remember Me
            </label>
            <Link to="#" className="text-sm text-orange-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Register Redirect */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-orange-500 hover:underline font-medium">
            Create one
          </Link>
        </p>
      </Card>
    </motion.div>
  )
}

export default Login
