
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'driveway', name: 'Driveways' },
    { id: 'house', name: 'House Washing' },
    { id: 'deck', name: 'Decks' },
    { id: 'commercial', name: 'Commercial' }
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'Commercial Driveway Cleaning',
      category: 'driveway',
      location: 'St. Catharines',
      beforeImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      afterImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      description: 'Commercial driveway pressure washing and stain removal.'
    },
    {
      id: 2,
      title: 'House Exterior Washing',
      category: 'house',
      location: 'Niagara Falls',
      beforeImage: 'https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png',
      afterImage: 'https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png',
      description: 'Professional house washing removing dirt and mildew buildup.'
    },
    {
      id: 3,
      title: 'Deck Restoration',
      category: 'deck',
      location: 'Welland',
      beforeImage: 'https://cdn.abacus.ai/images/d06ebd45-22bf-4861-9a8f-bec136caffff.png',
      afterImage: 'https://cdn.abacus.ai/images/d06ebd45-22bf-4861-9a8f-bec136caffff.png',
      description: 'Wood deck cleaning and restoration revealing the natural wood grain.'
    },
    {
      id: 4,
      title: 'Commercial Building Cleaning',
      category: 'commercial',
      location: 'St. Catharines',
      beforeImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      afterImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      description: 'Commercial building exterior cleaning and maintenance.'
    },
    {
      id: 5,
      title: 'Residential Driveway',
      category: 'driveway',
      location: 'Niagara-on-the-Lake',
      beforeImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      afterImage: 'https://cdn.abacus.ai/images/600f9aff-9c80-420d-9e5e-daba48c722c3.png',
      description: 'Residential driveway cleaning with oil stain removal.'
    },
    {
      id: 6,
      title: 'Vinyl Siding Cleaning',
      category: 'house',
      location: 'Thorold',
      beforeImage: 'https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png',
      afterImage: 'https://cdn.abacus.ai/images/4a2707c0-5c63-4c65-befa-e270ee3edb04.png',
      description: 'Vinyl siding soft wash removing algae and discoloration.'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            Before & After Gallery
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See the results we've achieved for customers throughout the Niagara region.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="btn-hover-lift"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            key={selectedCategory}
          >
            {filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="overflow-hidden card-hover">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Before/After Images */}
                      <div className="grid grid-cols-2">
                        <div className="relative aspect-square">
                          <Image
                            src={item.beforeImage}
                            alt={`${item.title} - Before`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge variant="destructive">Before</Badge>
                          </div>
                        </div>
                        <div className="relative aspect-square">
                          <Image
                            src={item.afterImage}
                            alt={`${item.title} - After`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-green-600">After</Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">
                          {item.location}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Feedback Section */}
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
              Customer Feedback
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
                name: 'Jennifer W.',
                location: 'St. Catharines',
                text: 'Good work on our driveway. The oil stains are much lighter and the whole area looks cleaner. Fair pricing too.',
                rating: 5
              },
              {
                name: 'Robert K.',
                location: 'Niagara Falls',
                text: 'Professional service. They showed up when they said they would and did a thorough job on our house exterior.',
                rating: 5
              },
              {
                name: 'Maria S.',
                location: 'Welland',
                text: 'Our deck looks much better. They were careful around our garden and cleaned up after themselves.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
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
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free estimate and see how we can help improve 
            your property's appearance.
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
