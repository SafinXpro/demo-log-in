import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { serviceRequestSchema } from '@/utils/validationSchemas'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'

const CustomerService = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(serviceRequestSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Service request:', data)
      toast.success('Service request submitted successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Request Service</h2>
        <p className="text-gray-600">Submit a new service request</p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Service Request Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="serviceType" required>
                Service Type
              </Label>
              <select
                id="serviceType"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                {...register('serviceType')}
              >
                <option value="">Select service type</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="customization">Customization</option>
                <option value="modernization">Modernization</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="description" required>
                Description
              </Label>
              <textarea
                id="description"
                placeholder="Describe your service requirements"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                {...register('description')}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredDate" required>
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                type="date"
                error={errors.preferredDate?.message}
                {...register('preferredDate')}
              />
            </div>

            <div>
              <Label htmlFor="address" required>
                Address
              </Label>
              <Input
                id="address"
                placeholder="Service location address"
                error={errors.address?.message}
                {...register('address')}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CustomerService
