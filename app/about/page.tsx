
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Phone,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
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

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We show up on time and deliver consistent, quality results you can count on.'
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'We use professional equipment and proven techniques to achieve excellent cleaning results.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction matters to us. We listen to your needs and work to meet your expectations.'
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'We provide competitive, transparent pricing with no hidden fees or surprises.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Satisfied Customers' },
    { number: '150+', label: 'Projects Complete' },
    { number: '3', label: 'Years in Business' },
    { number: '7', label: 'Days a Week Service' }
  ]

  const certifications = [
    'Fully Licensed and Insured',
    'Environmental Safety Practices',
    'Professional Equipment Training',
    'Local Business Commitment'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex-1 text-center lg:text-left">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                About St. Catharines Pressure Washing
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 leading-relaxed"
                variants={itemVariants}
              >
                A local pressure washing service committed to providing quality cleaning solutions 
                for homes and businesses throughout the Niagara region. We focus on reliable service, 
                fair pricing, and customer satisfaction.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
            </div>
            
            <motion.div 
              className="flex-1"
              variants={itemVariants}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://cdn.abacus.ai/images/e9b21405-48d0-43f3-8d7a-3ca82082994c.jpg"
                  alt="St. Catharines Pressure Washing business owner"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  St. Catharines Pressure Washing started as a local service with a simple goal: 
                  to provide reliable, quality pressure washing services to homeowners and businesses 
                  in the Niagara region at fair prices.
                </p>
                <p>
                  We understand that your property is important to you. That's why we approach every 
                  project with care and attention to detail. Our team uses professional equipment and 
                  proven techniques to deliver consistent results.
                </p>
                <p>
                  Over the past three years, we've had the opportunity to help many customers throughout 
                  St. Catharines, Niagara Falls, Welland, and surrounding areas improve the appearance 
                  of their properties through professional cleaning services.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.abacus.ai/images/bc805dee-03ea-4661-ac2a-2fc9c57915df.png"
                  alt="St. Catharines Pressure Washing team and equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              What We Stand For
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              These principles guide our work and help us provide consistent service to our customers.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Our Track Record
            </motion.h2>
            <motion.p 
              className="text-xl"
              variants={itemVariants}
            >
              Numbers that reflect our commitment to serving the local community.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
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

      {/* Certifications Section */}
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
                Licensed, Insured & Professional
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your peace of mind is important to us. We maintain proper licensing, insurance, 
                and follow professional standards to provide reliable pressure washing services 
                throughout the Niagara region.
              </p>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Professional Service
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete liability insurance coverage protects your property and gives you confidence in our services.
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Trusted by local customers</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                title: 'Competitive Pricing',
                description: 'We offer fair, transparent pricing for quality pressure washing services in the Niagara region.',
                icon: '💰'
              },
              {
                title: 'Flexible Scheduling',
                description: 'Available 7 days a week to accommodate your schedule. We work around your availability.',
                icon: '🕐'
              },
              {
                title: 'Free Estimates',
                description: 'Get accurate pricing with no hidden fees. Our estimates are always free and detailed.',
                icon: '📋'
              },
              {
                title: 'Environmentally Conscious',
                description: 'We use eco-friendly cleaning products that are safe for your landscaping and the environment.',
                icon: '🌱'
              },
              {
                title: 'Professional Equipment',
                description: 'Commercial-grade pressure washing equipment ensures efficient service and quality results.',
                icon: '🔧'
              },
              {
                title: 'Local Business',
                description: 'We\'re part of the local community and committed to serving our neighbors with quality service.',
                icon: '⭐'
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
            Contact us today for a free estimate and see how we can help improve 
            your property's appearance with professional pressure washing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg btn-hover-lift">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg btn-hover-lift">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
