import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { registerSchema } from '@/utils/validationSchemas'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log('Registration data:', data)
      
      toast.success('Registration successful! Please login.')
      navigate('/login')
    } catch (error) {
      toast.error('Registration failed. Please try again.')
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
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Create Account</h2>
          <p className="text-gray-500 mt-1">Create your account to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="name" required>
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              error={errors.name?.message}
              {...register('name')}
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              error={errors.password?.message}
              {...register('password')}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword" required>
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </div>

          {/* Register Button */}
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </Card>
    </motion.div>
  )
}

export default Register
