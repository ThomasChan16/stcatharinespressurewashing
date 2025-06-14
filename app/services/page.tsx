
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Car, 
  Home, 
  TreePine, 
  Droplets, 
  Building, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ServicesPage() {
  const services = [
    {
      icon: Car,
      title: 'Driveway Cleaning',
      description: 'Professional cleaning for concrete, asphalt, and interlocking driveways. Remove years of dirt, stains, and grime.',
      features: [
        'Concrete driveway cleaning',
        'Asphalt surface restoration',
        'Interlocking brick cleaning',
        'Stain and discoloration removal',
        'Sealing services available'
      ],
      image: '{https://i.ytimg.com/vi/DqiktAd_hFg/maxresdefault.jpg}',
      href: '/services/driveway-cleaning'
    },
    {
      icon: Home,
      title: 'House Washing',
      description: 'Gentle yet effective exterior house cleaning that protects your home while delivering outstanding results.',
      features: [
        'Soft wash technique',
        'All siding materials',
        'Window and trim cleaning',
        'Mold and mildew removal',
        'Eco-friendly solutions'
      ],
      image: '{https://i.ytimg.com/vi/zqfNQm1TMSw/maxresdefault.jpg}',
      href: '/services/house-washing'
    },
    {
      icon: TreePine,
      title: 'Deck Cleaning',
      description: 'Restore your deck to its original beauty with our specialized wood and composite deck cleaning services.',
      features: [
        'Wood deck restoration',
        'Composite deck cleaning',
        'Stain and seal preparation',
        'Mold and algae removal',
        'Gentle cleaning process'
      ],
      image: '{https://i.pinimg.com/originals/72/7a/71/727a71704d984a94196cfd454d221511.jpg}',
      href: '/services/deck-cleaning'
    },
    {
      icon: Droplets,
      title: 'Oil Stain Removal',
      description: 'Specialized treatment for stubborn oil, grease, and automotive fluid stains on driveways and garage floors.',
      features: [
        'Heavy-duty degreasing',
        'Hot water treatment',
        'Specialized cleaning agents',
        'Concrete restoration',
        'Preventive treatments'
      ],
      image: '{https://i.ytimg.com/vi/z_03c87RuX4/maxresdefault.jpg}',
      href: '/services/oil-stain-removal'
    },
    {
      icon: Building,
      title: 'Siding Cleaning',
      description: 'Safe and effective cleaning for all types of siding materials, from vinyl to wood to composite.',
      features: [
        'Vinyl siding cleaning',
        'Wood siding restoration',
        'Composite material care',
        'Algae and mold removal',
        'Color restoration'
      ],
      image: '{https://i.ytimg.com/vi/zqfNQm1TMSw/maxresdefault.jpg}',
      href: '/services/siding-cleaning'
    },
    {
      icon: Zap,
      title: 'Roof Cleaning',
      description: 'Professional roof cleaning to remove moss, algae, and debris while protecting your roofing materials.',
      features: [
        'Soft wash roof cleaning',
        'Moss and algae removal',
        'Gutter cleaning included',
        'Shingle protection',
        'Preventive treatments'
      ],
      image: '{https://i.pinimg.com/originals/ec/11/d5/ec11d5d2adc572e81140d91ed79fec28.jpg}',
      href: '/services/roof-cleaning'
    }
  ]

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Pressure Washing Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive cleaning solutions for residential and commercial properties 
            throughout the Niagara region.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg btn-hover-lift">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
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
              Our Specialized Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Each service is tailored to deliver exceptional results while protecting your property investment.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={service.href}>
                        <Button className="gradient-blue text-white btn-hover-lift">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose St. Catharines Pressure Washing?
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: 'Lowest Price Guarantee',
                description: 'We guarantee the most competitive prices in the Niagara region.',
                icon: '💰'
              },
              {
                title: 'Fully Insured',
                description: 'Complete insurance coverage for your peace of mind.',
                icon: '🛡️'
              },
              {
                title: '7 Days a Week',
                description: 'Available when you need us, 7AM to 6PM every day.',
                icon: '🕐'
              },
              {
                title: 'Free Quotes',
                description: 'No obligation estimates for all our services.',
                icon: '📋'
              },
              {
                title: 'Eco-Friendly',
                description: 'Environmentally safe cleaning solutions.',
                icon: '🌱'
              },
              {
                title: 'Satisfaction Guaranteed',
                description: '100% satisfaction guarantee on all our work.',
                icon: '⭐'
              }
            ].map((benefit, index) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free quote on any of our professional pressure washing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg btn-hover-lift">
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:3658808272">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg btn-hover-lift">
                Call (365) 880-8272
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
