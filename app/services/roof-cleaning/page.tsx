
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Roof Cleaning St. Catharines | Professional Roof Washing Services',
  description: 'Professional roof cleaning services in St. Catharines and Niagara region. Safe removal of moss, algae, and debris from all roof types. Free estimates.',
  keywords: 'roof cleaning St. Catharines, moss removal Niagara, algae cleaning, roof washing, roof maintenance, shingle cleaning',
}

export default function RoofCleaningPage() {
  const serviceData = {
    iconName: 'Zap',
    title: 'Professional Roof Cleaning',
    subtitle: 'Safe removal of moss, algae, and debris',
    description: 'Your roof is your home\'s first line of defense against the elements, but it\'s also susceptible to moss, algae, lichen, and debris accumulation that can cause damage and reduce its lifespan. Our professional roof cleaning services in St. Catharines and the Niagara region use safe, effective methods to remove these contaminants without damaging your roofing materials. We specialize in low-pressure cleaning techniques that protect your roof while restoring its appearance and function.',
    heroImage: '{https://i.pinimg.com/originals/bd/bf/ab/bdbfab7c1b059ebb043164b98000bd59.jpg}',
    features: [
      'Moss and algae removal',
      'Lichen treatment',
      'Debris and leaf removal',
      'Gutter cleaning included',
      'Low-pressure cleaning methods',
      'Shingle-safe techniques',
      'Preventive treatments available',
      'Safety-focused approach'
    ],
    benefits: [
      {
        title: 'Extended Roof Life',
        description: 'Removing moss, algae, and debris prevents damage that can lead to leaks and premature roof replacement.'
      },
      {
        title: 'Improved Appearance',
        description: 'Professional roof cleaning restores your roof\'s original color and significantly improves your home\'s curb appeal.'
      },
      {
        title: 'Better Drainage',
        description: 'Clean gutters and roof surfaces ensure proper water drainage, preventing water damage to your home.'
      },
      {
        title: 'Energy Efficiency',
        description: 'A clean roof reflects heat more effectively, potentially reducing cooling costs during summer months.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Safety Assessment',
        description: 'We evaluate roof condition, pitch, and safety requirements before beginning any cleaning work.'
      },
      {
        step: 2,
        title: 'Area Protection',
        description: 'We protect landscaping, outdoor furniture, and other items from cleaning solutions and debris.'
      },
      {
        step: 3,
        title: 'Gentle Cleaning',
        description: 'We use low-pressure techniques and appropriate cleaning solutions to safely remove moss, algae, and debris.'
      },
      {
        step: 4,
        title: 'Final Inspection',
        description: 'We inspect the completed work and clean up any debris to ensure your property is left clean and tidy.'
      }
    ],
    faq: [
      {
        question: 'Is roof cleaning safe for my shingles?',
        answer: 'Yes, we use low-pressure cleaning methods specifically designed to be safe for asphalt shingles, metal roofing, and other roofing materials.'
      },
      {
        question: 'How often should I have my roof professionally cleaned?',
        answer: 'Most roofs benefit from cleaning every 2-3 years, though roofs in shaded or humid areas may need more frequent cleaning to prevent moss and algae growth.'
      },
      {
        question: 'Can you prevent moss from growing back?',
        answer: 'We can apply preventive treatments that help slow moss and algae regrowth, though complete prevention depends on environmental factors like shade and humidity.'
      },
      {
        question: 'Do you clean gutters as part of roof cleaning?',
        answer: 'Yes, we include basic gutter cleaning and debris removal as part of our roof cleaning service to ensure proper drainage.'
      },
      {
        question: 'Is it safe to walk on my roof during cleaning?',
        answer: 'We prioritize safety and use appropriate equipment and techniques. When possible, we clean from ladders or use extension equipment to minimize roof walking.'
      },
      {
        question: 'Will cleaning damage my landscaping?',
        answer: 'We protect your plants and use eco-friendly cleaning solutions when possible. We also rinse plants thoroughly after cleaning to ensure their safety.'
      }
    ],
    serviceAreas: [
      'St. Catharines roof cleaning',
      'Niagara Falls roof washing',
      'Welland moss removal',
      'Niagara-on-the-Lake roof services',
      'Thorold roof maintenance',
      'Grimsby roof cleaning'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
