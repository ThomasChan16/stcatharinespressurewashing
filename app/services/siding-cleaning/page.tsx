
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Siding Cleaning St. Catharines | Professional Exterior Cleaning',
  description: 'Professional siding cleaning services in St. Catharines and Niagara region. Safe cleaning for vinyl, wood, and composite siding materials. Free estimates.',
  keywords: 'siding cleaning St. Catharines, vinyl siding cleaning Niagara, wood siding cleaning, composite siding maintenance, exterior siding washing',
}

export default function SidingCleaningPage() {
  const serviceData = {
    iconName: 'Building',
    title: 'Professional Siding Cleaning',
    subtitle: 'Safe, effective cleaning for all siding materials',
    description: 'Your home\'s siding is constantly exposed to weather, pollution, and organic growth that can cause discoloration, staining, and deterioration over time. Our professional siding cleaning services in St. Catharines and the Niagara region specialize in safely cleaning vinyl, wood, composite, and other siding materials. We use appropriate cleaning methods and solutions to restore your siding\'s appearance while protecting its integrity and your landscaping.',
    heroImage: '{https://perfectpowerwash.com/wp-content/uploads/2020/01/house-wash-service.jpg}',
    features: [
      'Vinyl siding soft washing',
      'Wood siding gentle cleaning',
      'Composite siding maintenance',
      'Aluminum siding restoration',
      'Fiber cement siding cleaning',
      'Mold and mildew removal',
      'Algae and moss treatment',
      'Eco-friendly cleaning solutions'
    ],
    benefits: [
      {
        title: 'Restored Appearance',
        description: 'Professional siding cleaning removes years of buildup, restoring your home\'s original color and beauty.'
      },
      {
        title: 'Material Protection',
        description: 'Regular cleaning prevents damage from contaminants that can degrade siding materials and cause premature replacement.'
      },
      {
        title: 'Health Benefits',
        description: 'Removing mold, mildew, and allergens from your home\'s exterior creates a healthier environment for your family.'
      },
      {
        title: 'Cost Savings',
        description: 'Proper maintenance extends siding life and prevents costly repairs or early replacement.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Siding Evaluation',
        description: 'We identify your siding material type and assess its condition to determine the safest and most effective cleaning approach.'
      },
      {
        step: 2,
        title: 'Area Preparation',
        description: 'We protect landscaping, outdoor furniture, and other items before beginning the cleaning process.'
      },
      {
        step: 3,
        title: 'Gentle Cleaning',
        description: 'We apply appropriate cleaning solutions and use low-pressure techniques safe for your specific siding material.'
      },
      {
        step: 4,
        title: 'Quality Inspection',
        description: 'We thoroughly rinse all surfaces and inspect the work to ensure complete cleaning and your satisfaction.'
      }
    ],
    faq: [
      {
        question: 'Is pressure washing safe for all types of siding?',
        answer: 'We use appropriate pressure levels and techniques for each siding type. Soft washing with low pressure is safe for vinyl, wood, and composite materials when performed correctly.'
      },
      {
        question: 'Can you remove black streaks and discoloration?',
        answer: 'Yes, we can effectively remove most black streaks, algae stains, and discoloration using specialized cleaning solutions designed for siding materials.'
      },
      {
        question: 'How often should siding be professionally cleaned?',
        answer: 'Most siding benefits from professional cleaning every 1-2 years, depending on environmental factors like humidity, tree coverage, and local weather conditions.'
      },
      {
        question: 'Will cleaning damage my landscaping?',
        answer: 'We take care to protect your plants and use eco-friendly cleaning solutions. We also thoroughly rinse plants after cleaning to ensure their safety.'
      },
      {
        question: 'Can you clean around windows and trim?',
        answer: 'Yes, we clean siding around windows, doors, and trim areas. We take special care around these delicate areas to prevent damage.'
      },
      {
        question: 'What about painted siding?',
        answer: 'We can safely clean painted siding using gentle techniques. However, if paint is already peeling or in poor condition, cleaning may reveal these existing issues.'
      }
    ],
    serviceAreas: [
      'St. Catharines siding cleaning',
      'Niagara Falls exterior washing',
      'Welland siding maintenance',
      'Niagara-on-the-Lake siding services',
      'Thorold siding cleaning',
      'Grimsby exterior cleaning'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
