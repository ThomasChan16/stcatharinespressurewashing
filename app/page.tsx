
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Shield, 
  Clock, 
  DollarSign,
  Droplets,
  Home,
  Car,
  TreePine,
  Building,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const HomePage = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })
  const testimonialsInView = useInView(testimonialsRef, { once: true })

  const heroControls = useAnimation()
  const servicesControls = useAnimation()
  const statsControls = useAnimation()
  const testimonialsControls = useAnimation()

  useEffect(() => {
    if (heroInView) heroControls.start('visible')
    if (servicesInView) servicesControls.start('visible')
    if (statsInView) statsControls.start('visible')
    if (testimonialsInView) testimonialsControls.start('visible')
  }, [heroInView, servicesInView, statsInView, testimonialsInView, heroControls, servicesControls, statsControls, testimonialsControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const services = [
    {
      icon: Car,
      title: 'Driveway Cleaning',
      description: 'Professional cleaning for concrete, asphalt, and interlocking driveways',
      href: '/services/driveway-cleaning'
    },
    {
      icon: Home,
      title: 'House Washing',
      description: 'Gentle yet thorough exterior cleaning for all home siding types',
      href: '/services/house-washing'
    },
    {
      icon: TreePine,
      title: 'Deck Cleaning',
      description: 'Restore and protect your deck with professional cleaning services',
      href: '/services/deck-cleaning'
    },
    {
      icon: Droplets,
      title: 'Oil Stain Removal',
      description: 'Specialized treatment for tough oil and automotive stains',
      href: '/services/oil-stain-removal'
    },
    {
      icon: Building,
      title: 'Siding Cleaning',
      description: 'Safe, effective cleaning for vinyl, wood, and composite siding',
      href: '/services/siding-cleaning'
    },
    {
      icon: Zap,
      title: 'Roof Cleaning',
      description: 'Professional roof cleaning to remove moss, algae, and debris',
      href: '/services/roof-cleaning'
    }
  ]

  const stats = [
    { number: '500+', label: 'Satisfied Customers' },
    { number: '150+', label: 'Projects Complete' },
    { number: '3', label: 'Years in Business' },
    { number: '7', label: 'Days a Week Service' }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'St. Catharines',
      rating: 5,
      text: 'They did a great job on our driveway. The oil stains are much lighter now and the whole surface looks cleaner. Professional service and fair pricing.'
    },
    {
      name: 'Mike T.',
      location: 'Niagara Falls',
      text: 'Reliable service. They showed up on time and cleaned our house siding thoroughly. Good value for the work done.'
    },
    {
      name: 'Lisa C.',
      location: 'Welland',
      text: 'Our deck looks much better after their cleaning. They were careful around our plants and cleaned up after themselves.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/452da929-5859-47de-9a4f-f32a06453a0e.png"
            alt="Professional pressure washing services in St. Catharines"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial="hidden"
          animate={heroControls}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
            variants={itemVariants}
          >
            Professional Pressure Washing in{' '}
            <span className="text-yellow-400">St. Catharines</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-shadow max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Quality pressure washing services for homes and businesses throughout the Niagara region. 
            Reliable, professional, and competitively priced.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg btn-hover-lift">
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:3658808272">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg btn-hover-lift">
                <Phone className="mr-2 h-5 w-5" />
                (365) 880-8272
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <DollarSign className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">Competitive Pricing</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">7 Days a Week</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={servicesControls}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Our Professional Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We provide comprehensive pressure washing solutions for residential and commercial properties 
              throughout the Niagara region.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesControls}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href}>
                  <Card className="h-full card-hover cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team & Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Equipment & Experienced Team
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We use commercial-grade pressure washing equipment to ensure efficient service 
                  and consistent results for every project. Our team is trained in proper techniques 
                  and safety protocols to protect your property.
                </p>
                <p>
                  From residential driveways to commercial buildings, we have the right equipment 
                  and experience to handle projects of all sizes throughout the Niagara region.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">7 Days a Week</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.abacus.ai/images/cb196a56-ddfe-491d-8ef7-b7d15fe7e81d.png"
                  alt="St. Catharines Pressure Washing team and professional equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              See the Results
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Real before and after photos from recent projects in the Niagara region.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png"
                        alt="Driveway before cleaning"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png"
                        alt="Driveway after cleaning"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">Driveway Cleaning</h3>
                    <p className="text-sm text-gray-600">St. Catharines residential project</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png"
                        alt="House siding before cleaning"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png"
                        alt="House siding after cleaning"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">House Washing</h3>
                    <p className="text-sm text-gray-600">Niagara Falls residential project</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 gradient-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={statsControls}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={testimonialsControls}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Honest feedback from recent customers across the Niagara region.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={testimonialsControls}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    {testimonial.rating && (
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    )}
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8">
            Get your free quote today and see why local customers choose us for their 
            pressure washing needs in the Niagara region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg btn-hover-lift">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg btn-hover-lift">
                Book Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
