
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'

export default function BookingPage() {
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
    services: [] as string[],
    message: '',
    preferredDate: '',
    preferredTime: '',
    propertyType: '',
    estimatedSize: '',
    urgency: 'standard'
  })

  const services = [
    'Driveway Cleaning',
    'House Washing',
    'Deck Cleaning',
    'Oil Stain Removal',
    'Siding Cleaning',
    'Roof Cleaning'
  ]

  const timeSlots = [
    '7:00 AM - 9:00 AM',
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
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

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      })
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.services.length === 0) {
      toast({
        title: "Please select at least one service",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Booking request submitted successfully!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
        })
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      toast({
        title: "Error submitting booking",
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
            Book Your Service
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your pressure washing service today. We're available 7 days a week 
            and guarantee the lowest prices in the Niagara region.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
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
                      Booking Request Submitted!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Thank you for choosing St. Catharines Pressure Washing. 
                      We'll contact you within 24 hours to confirm your appointment.
                    </p>
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
                            services: [],
                            message: '',
                            preferredDate: '',
                            preferredTime: '',
                            propertyType: '',
                            estimatedSize: '',
                            urgency: 'standard'
                          })
                        }}
                        className="btn-hover-lift"
                      >
                        Book Another Service
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
                      <Calendar className="h-6 w-6 mr-2 text-blue-600" />
                      Schedule Your Pressure Washing Service
                    </CardTitle>
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

                      {/* Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Needed *</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.services.includes(service)}
                                onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                              />
                              <Label htmlFor={service} className="text-sm font-medium">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scheduling */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Scheduling</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">Preferred Date</Label>
                            <Input
                              id="preferredDate"
                              name="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={handleInputChange}
                              className="mt-1"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          <div>
                            <Label htmlFor="preferredTime">Preferred Time</Label>
                            <Select 
                              value={formData.preferredTime} 
                              onValueChange={(value) => handleSelectChange('preferredTime', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="urgency">Service Urgency</Label>
                            <Select 
                              value={formData.urgency} 
                              onValueChange={(value) => handleSelectChange('urgency', value)}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="standard">Standard (Within 1 week)</SelectItem>
                                <SelectItem value="urgent">Urgent (Within 2-3 days)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Please describe any specific areas of concern, access requirements, or special instructions..."
                        />
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
                              <Calendar className="mr-2 h-4 w-4" />
                              Book Service
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
                            Call Instead
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

      {/* Benefits Section */}
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
              Why Book With Us?
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
                description: 'We guarantee the most competitive prices in the Niagara region.'
              },
              {
                icon: '🕐',
                title: 'Flexible Scheduling',
                description: 'Available 7 days a week, 7AM to 6PM to fit your schedule.'
              },
              {
                icon: '⭐',
                title: 'Satisfaction Guaranteed',
                description: '100% satisfaction guarantee on all our pressure washing services.'
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
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
    </div>
  )
}
