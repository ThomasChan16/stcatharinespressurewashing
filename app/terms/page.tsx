
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | St. Catharines Pressure Washing',
  description: 'Terms of service for St. Catharines Pressure Washing. Read our service terms and conditions.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Agreement</h2>
              <p className="text-gray-700 mb-4">
                By booking our pressure washing services, you agree to these terms and conditions. 
                St. Catharines Pressure Washing provides professional exterior cleaning services 
                throughout the Niagara region.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Scope</h2>
              <p className="text-gray-700 mb-4">Our services include:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Driveway and concrete cleaning</li>
                <li>House washing and siding cleaning</li>
                <li>Deck cleaning and restoration</li>
                <li>Oil stain removal</li>
                <li>Roof cleaning and moss removal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All quotes are provided free of charge</li>
                <li>We guarantee the lowest prices in the Niagara region</li>
                <li>Payment is due upon completion of services</li>
                <li>We accept cash, check, and electronic payments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                Services may be cancelled up to 24 hours before the scheduled appointment without penalty. 
                Same-day cancellations may be subject to a service fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability and Insurance</h2>
              <p className="text-gray-700 mb-4">
                St. Catharines Pressure Washing is fully licensed and insured. We maintain comprehensive 
                liability insurance to protect your property during our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We guarantee 100% satisfaction with our work. If you're not completely satisfied, 
                we'll return to address any concerns at no additional charge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms or our services:
              </p>
              <ul className="list-none text-gray-700">
                <li><strong>Phone:</strong> (365) 880-8272</li>
                <li><strong>Email:</strong> thomaschan@stcatharinespressurewashing.ca</li>
                <li><strong>Service Hours:</strong> 7 Days a Week, 7AM - 6PM</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
