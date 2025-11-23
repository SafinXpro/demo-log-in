import { motion } from 'framer-motion'
import { Target, Award, Shield, Rocket, Users, ThumbsUp, Heart } from 'lucide-react'
import { ANIMATION_VARIANTS } from '@/utils/constants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const About = () => {
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
            About <span className="text-orange-600">Sun Star Elevator & Engineering</span>
          </motion.h1>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Trusted since 1999, we deliver reliable, innovative, and premium elevator solutions across Bangladesh. Combining decades of expertise with state-of-the-art technology, we ensure the safety, comfort, and satisfaction of our clients.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.h2
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed mb-8"
        >
          Founded in 1999, Sun Star Elevator & Engineering has grown to become Bangladesh's premier elevator service provider. Our journey began with a commitment to quality, safety, and customer satisfaction, values we uphold to this day. Over two decades, we've completed over 300 projects with an 85% satisfaction rate, always striving to innovate and set new standards.
        </motion.p>

        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInLeft}>
            <img
              src="/assets/company_building.jpg"
              alt="Company Building"
              className="rounded-xl shadow-lg w-full object-cover h-64 md:h-auto"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
              }}
            />
          </motion.div>
          <motion.div variants={ANIMATION_VARIANTS.fadeInRight}>
            <p className="text-gray-700 text-lg leading-relaxed">
              We specialize in elevator installation, modernization, maintenance, and customization for residential, commercial, and industrial buildings. Safety and premium quality are our priorities, ensuring every project meets stringent standards and customer expectations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-title mb-8 text-center"
          >
            Our Mission & Values
          </motion.h2>

          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={ANIMATION_VARIANTS.scaleIn}>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-orange-500 shadow-md hover:shadow-lg transition h-full">
                <CardHeader>
                  <div className="w-14 h-14 flex items-center justify-center mb-4 text-orange-600">
                    <Target size={32} />
                  </div>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    To provide safe, efficient, and innovative elevator solutions that serve the needs of Bangladesh's growing infrastructure with uncompromising quality and customer care.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={ANIMATION_VARIANTS.scaleIn}>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-orange-500 shadow-md hover:shadow-lg transition h-full">
                <CardHeader>
                  <div className="w-14 h-14 flex items-center justify-center mb-4 text-orange-600">
                    <Heart size={32} />
                  </div>
                  <CardTitle>Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 list-disc list-inside leading-relaxed text-sm">
                    <li>Commitment to Safety</li>
                    <li>Customer Satisfaction</li>
                    <li>Innovation & Excellence</li>
                    <li>Integrity and Transparency</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={ANIMATION_VARIANTS.scaleIn}>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-orange-500 shadow-md hover:shadow-lg transition h-full">
                <CardHeader>
                  <div className="w-14 h-14 flex items-center justify-center mb-4 text-orange-600">
                    <Award size={32} />
                  </div>
                  <CardTitle>Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Over 25 years of proven excellence with in-depth industry knowledge, skilled professionals, and a client-focused approach on every project, big or small.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.h2
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title mb-8 text-center"
        >
          Why Choose <span className="text-orange-600">Sun Star?</span>
        </motion.h2>
        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            {
              icon: <Shield size={48} />,
              title: 'Certified & Safe',
              description: 'All solutions meet stringent safety standards with certified technicians.',
            },
            {
              icon: <Rocket size={48} />,
              title: 'Innovative Solutions',
              description: 'State-of-the-art technology tailored for modern infrastructure needs.',
            },
            {
              icon: <Users size={48} />,
              title: 'Experienced Team',
              description: 'Skilled professionals with decades of combined elevator industry expertise.',
            },
            {
              icon: <ThumbsUp size={48} />,
              title: 'Customer Satisfaction',
              description: 'Over 300 completed projects with high satisfaction and long-term partnerships.',
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={ANIMATION_VARIANTS.scaleIn}>
              <Card className="h-full hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 hover:border-orange-500">
                <CardHeader>
                  <div className="text-orange-600 mb-4 flex justify-center">{feature.icon}</div>
                  <CardTitle className="text-center text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default About
