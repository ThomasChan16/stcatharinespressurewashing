
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'

const Footer = () => {
  const services = [
    'Driveway Cleaning',
    'House Washing',
    'Deck Cleaning',
    'Oil Stain Removal',
    'Siding Cleaning',
    'Roof Cleaning'
  ]

  const serviceAreas = [
    'St. Catharines',
    'Niagara Falls',
    'Welland',
    'Niagara-on-the-Lake',
    'Thorold',
    'Grimsby'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/download.png"
                  alt="St. Catharines Pressure Washing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">St. Catharines</h3>
                <p className="text-blue-400 text-sm">Pressure Washing</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional pressure washing services throughout the Niagara region. 
              We guarantee the lowest prices and highest quality results.
            </p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-gray-300 text-sm ml-2">Trusted by 500+ customers</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a 
                  href="tel:3658808272" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  (365) 880-8272
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a 
                  href="mailto:thomaschan@stcatharinespressurewashing.ca" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  thomaschan@stcatharinespressurewashing.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Niagara Region, Ontario</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">7 Days a Week • 7AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 St. Catharines Pressure Washing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
