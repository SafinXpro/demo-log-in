import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ANIMATION_VARIANTS, ELEVATOR_CATEGORIES } from '@/utils/constants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Products = () => {
  const [activeTab, setActiveTab] = useState(ELEVATOR_CATEGORIES.PASSENGER)

  const productData = {
    passenger: [
      {
        name: 'Model A Passenger Lift',
        description: 'Smooth, reliable, up to 13 persons.',
        capacity: '1000 kg',
        speed: '1.0 m/s',
        image: '/assets/passenger_lift_modelA.jpg',
      },
      {
        name: 'Model B Passenger Lift',
        description: 'Energy-saving with elegant interior.',
        capacity: '900 kg',
        speed: '1.2 m/s',
        image: '/assets/passenger_lift_modelB.jpg',
      },
      {
        name: 'Model C Passenger Lift',
        description: 'Luxury cabin, touchscreen panel, 10-person capacity.',
        capacity: '800 kg',
        features: 'Custom interior',
        image: '/assets/passenger_lift_modelC.jpg',
      },
      {
        name: 'Model D Passenger Lift',
        description: 'Premium safety and performance.',
        capacity: '1200 kg',
        speed: '1.5 m/s',
        image: '/assets/passenger_lift_modelD.jpg',
      },
      {
        name: 'Model E Passenger Lift',
        description: 'Affordable, reliable, easy maintenance.',
        capacity: '750 kg',
        speed: '1.0 m/s',
        image: '/assets/passenger_lift_modelE.jpg',
      },
      {
        name: 'Model F Passenger Lift',
        description: 'Smart technology for urban buildings.',
        capacity: '900 kg',
        features: 'Environment-friendly',
        image: '/assets/passenger_lift_modelF.jpg',
      },
    ],
    commercial: [
      {
        name: 'Capsule Commercial Lift',
        description: 'Stylish glass cabin, panoramic view for malls and buildings.',
        capacity: '1600 kg',
        speed: '1.5 m/s',
        image: '/assets/commercial_lift_01.jpg',
      },
      {
        name: 'Hospital Commercial Lift',
        description: 'Wide cabin for stretchers and medical equipment with smooth ride.',
        capacity: '2000 kg',
        features: 'UV sanitization option',
        image: '/assets/commercial_lift_02.jpg',
      },
      {
        name: 'Office Building Lift',
        description: 'Quiet operation with security access control.',
        capacity: '1400 kg',
        speed: '1.2 m/s',
        image: '/assets/commercial_lift_03.jpg',
      },
      {
        name: 'Luxury Mall Lift',
        description: 'Elegant and spacious design for high traffic areas.',
        capacity: '1800 kg',
        features: 'Custom branding options',
        image: '/assets/commercial_lift_04.jpg',
      },
      {
        name: 'Hotel Commercial Lift',
        description: 'Comfortable ride with music and ambient lighting.',
        capacity: '1200 kg',
        features: 'Premium finishes',
        image: '/assets/commercial_lift_05.jpg',
      },
    ],
    cargo: [
      {
        name: 'Heavy Duty Cargo Lift',
        description: 'Industrial-grade for heavy loads.',
        capacity: '3000 kg',
        speed: '0.5 m/s',
        image: '/assets/cargo_lift_01.jpg',
      },
      {
        name: 'Warehouse Cargo Lift',
        description: 'Efficient vertical transportation for goods.',
        capacity: '2500 kg',
        features: 'Durable construction',
        image: '/assets/cargo_lift_02.jpg',
      },
    ],
    car: [
      {
        name: 'Car Lift Model A',
        description: 'Automated parking solution for residential buildings.',
        capacity: '2 cars',
        features: 'Space-saving design',
        image: '/assets/car_lift_01.jpg',
      },
      {
        name: 'Car Lift Model B',
        description: 'Commercial parking lift for shopping centers.',
        capacity: '4 cars',
        features: 'Quick retrieval system',
        image: '/assets/car_lift_02.jpg',
      },
    ],
  }

  const tabs = [
    { id: ELEVATOR_CATEGORIES.PASSENGER, label: 'Passenger Lift' },
    { id: ELEVATOR_CATEGORIES.COMMERCIAL, label: 'Commercial Lift' },
    { id: ELEVATOR_CATEGORIES.CARGO, label: 'Cargo Lift' },
    { id: ELEVATOR_CATEGORIES.CAR, label: 'Car Lift' },
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
          className="hero-title text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
        >
          Our <span className="text-orange-600">Products</span>
        </motion.h1>
        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="hero-sub text-base md:text-lg text-gray-700 mb-6 text-center"
        >
          Browse our elevator solutions by selecting a category below.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="flex justify-center gap-2 sm:gap-6 mb-10 flex-wrap"
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              className="transition-all"
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4 capitalize">
              {activeTab} Lifts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {productData[activeTab]?.map((product, index) => (
                <motion.div key={index} variants={ANIMATION_VARIANTS.fadeInUp}>
                  <Card className="h-full flex flex-col hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 hover:border-orange-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-xl mb-4 h-36 w-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80'
                      }}
                    />
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>Capacity: {product.capacity}</li>
                        {product.speed && <li>Speed: {product.speed}</li>}
                        {product.features && <li>{product.features}</li>}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Request Quote</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </div>
  )
}

export default Products
