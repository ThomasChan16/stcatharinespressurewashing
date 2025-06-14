
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'House Washing St. Catharines | Exterior Home Cleaning Services',
  description: 'Professional house washing services in St. Catharines and Niagara region. Safe cleaning for vinyl, wood, brick, and composite siding. Free estimates.',
  keywords: 'house washing St. Catharines, exterior home cleaning Niagara, siding cleaning, soft wash house cleaning, home pressure washing',
}

export default function HouseWashingPage() {
  const serviceData = {
    iconName: 'Home',
    title: 'Professional House Washing',
    subtitle: 'Gentle yet effective exterior home cleaning',
    description: 'Your home\'s exterior is constantly exposed to the elements, collecting dirt, mold, mildew, and other contaminants that can make it look aged and neglected. Our professional house washing services in St. Catharines and the Niagara region use safe, effective cleaning methods to restore your home\'s appearance. We specialize in soft washing techniques that clean thoroughly while protecting your siding, trim, and landscaping.',
    heroImage: '{https://i.pinimg.com/originals/80/ac/52/80ac52064e86d6aae18df614d51a9cf6.jpg}',
    features: [
      'Soft wash cleaning for all siding types',
      'Vinyl siding cleaning and restoration',
      'Wood siding gentle cleaning',
      'Brick and stone exterior cleaning',
      'Composite siding maintenance',
      'Trim and window frame cleaning',
      'Mold and mildew removal',
      'Eco-friendly cleaning solutions'
    ],
    benefits: [
      {
        title: 'Enhanced Home Appearance',
        description: 'Professional house washing removes years of buildup, making your home look fresh and well-maintained.'
      },
      {
        title: 'Healthier Living Environment',
        description: 'Removing mold, mildew, and allergens from your home\'s exterior creates a healthier environment for your family.'
      },
      {
        title: 'Siding Protection',
        description: 'Regular cleaning prevents damage from contaminants that can degrade siding materials over time.'
      },
      {
        title: 'Increased Property Value',
        description: 'A clean, well-maintained exterior significantly improves your home\'s curb appeal and market value.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Exterior Inspection',
        description: 'We assess your home\'s siding type, condition, and identify areas requiring special attention or treatment.'
      },
      {
        step: 2,
        title: 'Landscape Protection',
        description: 'We protect your plants, outdoor furniture, and other items before beginning the cleaning process.'
      },
      {
        step: 3,
        title: 'Soft Wash Application',
        description: 'We apply appropriate cleaning solutions and use low-pressure techniques safe for your specific siding material.'
      },
      {
        step: 4,
        title: 'Final Rinse & Inspection',
        description: 'We thoroughly rinse all surfaces and inspect the work to ensure complete cleaning and your satisfaction.'
      }
    ],
    faq: [
      {
        question: 'Is house washing safe for all types of siding?',
        answer: 'Yes, we use appropriate cleaning methods for each siding type. Soft washing is safe for vinyl, wood, brick, stone, and composite materials when performed correctly.'
      },
      {
        question: 'How often should I have my house washed?',
        answer: 'Most homes benefit from professional washing every 1-2 years, depending on environmental factors like tree coverage, humidity, and local weather conditions.'
      },
      {
        question: 'Will you damage my landscaping or plants?',
        answer: 'We take care to protect your landscaping by covering plants and using eco-friendly cleaning solutions. We also rinse plants thoroughly after cleaning.'
      },
      {
        question: 'Can you remove black streaks and stains?',
        answer: 'Yes, we can effectively remove most black streaks, mold, mildew, and algae stains using specialized cleaning solutions and techniques.'
      },
      {
        question: 'Do you clean windows as part of house washing?',
        answer: 'Our house washing service focuses on siding and exterior surfaces. We can clean window frames and sills, but detailed window cleaning is a separate service.'
      },
      {
        question: 'What if it rains after you clean my house?',
        answer: 'Rain won\'t affect the cleaning results. Our cleaning solutions continue working even after application, and rain actually helps rinse away any remaining residue.'
      }
    ],
    serviceAreas: [
      'St. Catharines house washing',
      'Niagara Falls exterior cleaning',
      'Welland home washing',
      'Niagara-on-the-Lake siding cleaning',
      'Thorold house cleaning',
      'Grimsby exterior washing'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
