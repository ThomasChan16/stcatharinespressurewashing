
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Oil Stain Removal St. Catharines | Driveway Stain Cleaning',
  description: 'Professional oil stain removal services in St. Catharines and Niagara region. Specialized treatment for automotive stains on concrete and asphalt. Free estimates.',
  keywords: 'oil stain removal St. Catharines, driveway stain cleaning Niagara, automotive stain removal, concrete stain treatment, grease stain cleaning',
}

export default function OilStainRemovalPage() {
  const serviceData = {
    iconName: 'Droplets',
    title: 'Professional Oil Stain Removal',
    subtitle: 'Specialized treatment for tough automotive stains',
    description: 'Oil and automotive fluid stains can be some of the most stubborn and unsightly marks on your driveway or parking area. These stains not only detract from your property\'s appearance but can also penetrate deep into concrete and asphalt surfaces. Our specialized oil stain removal services in St. Catharines and the Niagara region use professional-grade degreasers, hot water extraction, and proven techniques to significantly improve or eliminate these tough stains.',
    heroImage: '{https://i.ytimg.com/vi/z_03c87RuX4/maxresdefault.jpg}',
    features: [
      'Hot water extraction treatment',
      'Professional-grade degreasers',
      'Deep penetrating stain removal',
      'Fresh and old stain treatment',
      'Concrete and asphalt safe methods',
      'Environmentally responsible products',
      'Multiple treatment applications',
      'Stain prevention advice'
    ],
    benefits: [
      {
        title: 'Improved Appearance',
        description: 'Removing oil stains dramatically improves your driveway\'s appearance and your property\'s overall curb appeal.'
      },
      {
        title: 'Surface Protection',
        description: 'Oil and chemicals can break down concrete and asphalt over time. Removal helps protect your surface investment.'
      },
      {
        title: 'Environmental Benefits',
        description: 'Proper oil stain removal prevents harmful chemicals from washing into storm drains and local waterways.'
      },
      {
        title: 'Property Value',
        description: 'Clean, stain-free surfaces contribute to better property value and marketability.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Stain Assessment',
        description: 'We evaluate the type, age, and extent of oil stains to determine the most effective treatment approach.'
      },
      {
        step: 2,
        title: 'Pre-Treatment Application',
        description: 'We apply specialized degreasers and allow them to penetrate and break down the oil compounds.'
      },
      {
        step: 3,
        title: 'Hot Water Extraction',
        description: 'We use hot water and pressure washing to extract loosened oil and cleaning solutions from the surface.'
      },
      {
        step: 4,
        title: 'Results Evaluation',
        description: 'We assess the results and may recommend additional treatments for particularly stubborn stains.'
      }
    ],
    faq: [
      {
        question: 'Can you completely remove all oil stains?',
        answer: 'Results vary depending on the age, type, and depth of the stain. Fresh stains typically respond better to treatment. Very old or deep stains may be significantly improved but not completely eliminated.'
      },
      {
        question: 'How long does oil stain removal take?',
        answer: 'Treatment time depends on the number and severity of stains. Most jobs take 1-3 hours, including pre-treatment time and multiple cleaning passes.'
      },
      {
        question: 'Is the treatment safe for my driveway surface?',
        answer: 'Yes, we use cleaning products and techniques that are safe for concrete and asphalt surfaces when applied correctly.'
      },
      {
        question: 'What types of automotive stains can you treat?',
        answer: 'We can treat motor oil, transmission fluid, brake fluid, power steering fluid, and most other automotive fluid stains.'
      },
      {
        question: 'How can I prevent future oil stains?',
        answer: 'We can provide advice on stain prevention, including prompt cleanup of fresh spills and optional sealing services for your driveway.'
      },
      {
        question: 'Do you guarantee complete stain removal?',
        answer: 'We guarantee significant improvement in stain appearance, but complete removal depends on factors like stain age and depth. We\'ll discuss realistic expectations during your consultation.'
      }
    ],
    serviceAreas: [
      'St. Catharines oil stain removal',
      'Niagara Falls stain cleaning',
      'Welland automotive stain removal',
      'Niagara-on-the-Lake driveway stains',
      'Thorold oil stain treatment',
      'Grimsby stain removal services'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
