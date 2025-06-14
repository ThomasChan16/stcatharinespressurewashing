
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CheckCircle, Phone, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    service: '',
    description: '',
    propertyType: '',
    estimatedSize: '',
    urgency: 'standard',
    images: [] as string[]
  })

  const services = [
    'Driveway Cleaning',
    'House Washing',
    'Deck Cleaning',
    'Oil Stain Removal',
    'Siding Cleaning',
    'Roof Cleaning',
    'Multiple Services',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Quote request submitted successfully!",
          description: "We'll provide your free quote within 24 hours.",
        })
      } else {
        throw new Error('Failed to submit quote request')
      }
    } catch (error) {
      toast({
        title: "Error submitting quote request",
        description: "Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Get Your Free Quote
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Receive a detailed, no-obligation quote for your pressure washing needs. 
            We guarantee the lowest prices in the Niagara region!
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {isSubmitted ? (
              <motion.div variants={itemVariants}>
                <Card className="text-center py-12">
                  <CardContent>
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Quote Request Submitted!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Thank you for choosing St. Catharines Pressure Washing. 
                      We'll provide your detailed quote within 24 hours.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h3>
                      <ul className="text-left text-blue-800 space-y-2">
                        <li>• We'll review your request and property details</li>
                        <li>• Our team will prepare a detailed, itemized quote</li>
                        <li>• You'll receive your quote via email within 24 hours</li>
                        <li>• We'll follow up to answer any questions</li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:3658808272">
                        <Button size="lg" className="gradient-blue text-white btn-hover-lift">
                          <Phone className="mr-2 h-5 w-5" />
                          Call Us: (365) 880-8272
                        </Button>
                      </a>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            address: '',
                            city: '',
                            postalCode: '',
                            service: '',
                            description: '',
                            propertyType: '',
                            estimatedSize: '',
                            urgency: 'standard',
                            images: []
                          })
                        }}
                        className="btn-hover-lift"
                      >
                        Request Another Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                      Free Pressure Washing Quote
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below for a detailed, no-obligation quote. 
                      All quotes include our lowest price guarantee.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label htmlFor="address">Property Address *</Label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                              placeholder="123 Main Street"
                            />
                          </div>
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Select 
                              value={formData.city} 
                              onValueChange={(value) => handleSelectChange('city', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="St. Catharines">St. Catharines</SelectItem>
                                <SelectItem value="Niagara Falls">Niagara Falls</SelectItem>
                                <SelectItem value="Welland">Welland</SelectItem>
                                <SelectItem value="Niagara-on-the-Lake">Niagara-on-the-Lake</SelectItem>
                                <SelectItem value="Thorold">Thorold</SelectItem>
                                <SelectItem value="Grimsby">Grimsby</SelectItem>
                                <SelectItem value="Fort Erie">Fort Erie</SelectItem>
                                <SelectItem value="Lincoln">Lincoln</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input
                              id="postalCode"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              className="mt-1"
                              placeholder="L2R 3B1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="propertyType">Property Type</Label>
                            <Select 
                              value={formData.propertyType} 
                              onValueChange={(value) => handleSelectChange('propertyType', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="residential">Residential</SelectItem>
                                <SelectItem value="commercial">Commercial</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="estimatedSize">Property Size</Label>
                            <Select 
                              value={formData.estimatedSize} 
                              onValueChange={(value) => handleSelectChange('estimatedSize', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small">Small (Under 1,500 sq ft)</SelectItem>
                                <SelectItem value="medium">Medium (1,500 - 3,000 sq ft)</SelectItem>
                                <SelectItem value="large">Large (Over 3,000 sq ft)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="service">Primary Service Needed *</Label>
                            <Select 
                              value={formData.service} 
                              onValueChange={(value) => handleSelectChange('service', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>{service}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="urgency">Timeline</Label>
                            <Select 
                              value={formData.urgency} 
                              onValueChange={(value) => handleSelectChange('urgency', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="standard">Standard (Within 2 weeks)</SelectItem>
                                <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="description">Detailed Description *</Label>
                            <Textarea
                              id="description"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              required
                              rows={4}
                              className="mt-1"
                              placeholder="Please describe the areas that need cleaning, any specific stains or problem areas, and any other relevant details..."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          type="submit" 
                          className="flex-1 gradient-blue text-white btn-hover-lift"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Calculator className="mr-2 h-4 w-4" />
                              Get Free Quote
                            </>
                          )}
                        </Button>
                        <a href="tel:3658808272" className="flex-1">
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="w-full btn-hover-lift"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call for Quote
                          </Button>
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
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
              Our Quote Guarantee
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                icon: '💰',
                title: 'Lowest Price Guarantee',
                description: 'Find a lower quote from a licensed competitor and we\'ll match it.'
              },
              {
                icon: '📋',
                title: 'Detailed Breakdown',
                description: 'Every quote includes itemized pricing with no hidden fees or surprises.'
              },
              {
                icon: '⏰',
                title: '24-Hour Response',
                description: 'All quote requests receive a response within 24 hours, guaranteed.'
              }
            ].map((guarantee, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{guarantee.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
