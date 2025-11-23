import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, Paintbrush, Cog, ArrowRight } from 'lucide-react'
import { ANIMATION_VARIANTS, COMPANY_STATS } from '@/utils/constants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        variants={ANIMATION_VARIANTS.fadeIn}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8 max-w-[1250px]"
      >
        <div className="w-full md:w-7/12">
          <motion.span
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm mb-4 inline-block"
          >
            Trusted Since 1999
          </motion.span>
          <motion.h1
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="hero-title text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            Sun Star <span className="text-orange-600">Elevator</span>
            <br />
            <span className="text-gray-800">& Engineering</span>
          </motion.h1>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="hero-sub text-base md:text-lg text-gray-700 mb-8"
          >
            Delivering excellence in elevator installation, maintenance, and modernization services across Bangladesh. Quality and safety guaranteed.
          </motion.p>
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="hero-cta flex flex-wrap gap-4"
          >
            <Link to="/products">
              <Button size="lg">
                Explore Products <ArrowRight className="ml-2 inline" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          >
            {Object.entries(COMPANY_STATS).map(([key, value]) => (
              <motion.div
                key={key}
                variants={ANIMATION_VARIANTS.scaleIn}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md border border-gray-200 hover:border-orange-500 p-4 text-center hover:shadow-lg transition"
              >
                <div className="text-2xl font-bold text-orange-600">{value}</div>
                <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={ANIMATION_VARIANTS.fadeInRight}
          className="w-full md:w-5/12 stats-aside"
        >
          <img
            src="/assets/hero-image.jpg"
            alt="Sun Star Elevator"
            className="rounded-3xl shadow-2xl w-full"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
            }}
          />
        </motion.div>
      </motion.section>

      {/* Services Section */}
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
            Our <span className="text-orange-600">Services</span>
          </motion.h2>

          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Cog className="w-6 h-6" />,
                title: 'Installation',
                description: 'Residential, commercial and industrial installation with precision and care.',
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: 'Modernization',
                description: 'Upgrade aging systems for better performance and safety.',
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: 'Maintenance & Repairs',
                description: 'Quick-response emergency repairs and routine maintenance.',
              },
              {
                icon: <Paintbrush className="w-6 h-6" />,
                title: 'Customization',
                description: 'Tailored elevator solutions designed specifically for your unique requirements.',
              },
            ].map((service, index) => (
              <motion.div key={index} variants={ANIMATION_VARIANTS.fadeInUp}>
                <Card className="h-full hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 hover:border-orange-500">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg">
                View All Services <ArrowRight className="ml-2 inline" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
