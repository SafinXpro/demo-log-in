import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { toast } from 'react-toastify'
import { ANIMATION_VARIANTS, COMPANY_INFO } from '@/utils/constants'
import { contactSchema } from '@/utils/validationSchemas'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { Card } from '@/components/ui/Card'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Contact form data:', data)
      toast.success('Message sent successfully! We will get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        variants={ANIMATION_VARIANTS.fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-br from-orange-200 via-yellow-100 to-white py-16"
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <motion.h1
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="hero-title text-5xl md:text-6xl font-bold mb-6"
          >
            Contact <span className="text-orange-600">Sun Star Elevator</span>
          </motion.h1>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We're here to answer your questions and provide the best elevator solutions. Reach out to us anytime!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <section className="container mx-auto px-4 py-12 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Get in Touch</h2>
          <p className="text-gray-700 text-lg mb-6">
            We welcome your inquiries and feedback. Please use the form to send us a message or contact us directly.
          </p>

          <ul className="space-y-4 text-gray-700 text-lg mb-8">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 text-orange-600 flex-shrink-0" size={20} />
              <div>
                <span className="font-semibold">Phone:</span>
                <div>{COMPANY_INFO.PHONE.join(' / ')}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 text-orange-600 flex-shrink-0" size={20} />
              <div>
                <span className="font-semibold">Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.EMAIL}`}
                  className="text-orange-600 hover:underline ml-1"
                >
                  {COMPANY_INFO.EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 text-orange-600 flex-shrink-0" size={20} />
              <div>
                <span className="font-semibold">Address:</span>
                <div className="ml-1">{COMPANY_INFO.ADDRESS}</div>
              </div>
            </li>
          </ul>

          <Card className="bg-orange-50">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 text-orange-600 flex-shrink-0" size={20} />
              <div className="text-gray-700">
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p>{COMPANY_INFO.BUSINESS_HOURS.weekdays}</p>
                <p>{COMPANY_INFO.BUSINESS_HOURS.weekend}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Send Us a Message</h2>
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name" required>
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  {...register('name')}
                />
              </div>

              <div>
                <Label htmlFor="email" required>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="01XXXXXXXXX"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
              </div>

              <div>
                <Label htmlFor="message" required>
                  Message
                </Label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
