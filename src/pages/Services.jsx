import { motion } from 'framer-motion'
import { Wrench, Paintbrush, Cog, RotateCw } from 'lucide-react'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Services = () => {
  const services = [
    {
      icon: <Cog size={32} />,
      title: 'Installation',
      description:
        'Professional elevator installation for residential, commercial, and industrial buildings, ensuring safety and compliance with all standards.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Maintenance',
      description:
        'Routine maintenance plans designed to maximize the lifespan and safety of your elevator systems with timely inspections and repairs.',
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Customization',
      description:
        'Tailor-made elevator solutions to match your building design and your specific needs with premium materials and smart technology.',
    },
    {
      icon: <RotateCw size={32} />,
      title: 'Modernization',
      description:
        'Upgrade your existing elevator systems with the latest technologies for improved performance, efficiency, and safety.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        variants={ANIMATION_VARIANTS.fadeIn}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 max-w-[1250px]"
      >
        <motion.h1
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="hero-title text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
        >
          Our <span className="text-orange-600">Services</span>
        </motion.h1>

        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="hero-sub text-base md:text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Discover our comprehensive elevator services designed to keep your systems safe, reliable, and efficient.
        </motion.p>

        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={ANIMATION_VARIANTS.fadeInUp}>
              <Card className="h-full flex flex-col hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 hover:border-orange-500">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full md:w-auto">Get Quote</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Our Services */}
      <motion.section
        variants={ANIMATION_VARIANTS.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="section-title text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose Our Services?
          </motion.h2>

          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '24/7 Support',
                description:
                  'Round-the-clock emergency support and quick response to all service requests.',
              },
              {
                title: 'Certified Technicians',
                description:
                  'Highly trained and certified professionals with years of industry experience.',
              },
              {
                title: 'Affordable Pricing',
                description:
                  'Competitive rates with transparent pricing and flexible payment options.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={ANIMATION_VARIANTS.scaleIn}>
                <Card className="h-full bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 hover:border-orange-500 shadow-md hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services
