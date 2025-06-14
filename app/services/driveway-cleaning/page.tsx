
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Driveway Cleaning St. Catharines | Professional Pressure Washing',
  description: 'Professional driveway cleaning services in St. Catharines and Niagara region. Remove oil stains, dirt, and grime from concrete and asphalt driveways. Free quotes.',
  keywords: 'driveway cleaning St. Catharines, concrete cleaning Niagara, asphalt driveway cleaning, oil stain removal, pressure washing driveways',
}

export default function DrivewayCleaningPage() {
  const serviceData = {
    iconName: 'Car',
    title: 'Professional Driveway Cleaning',
    subtitle: 'Restore your driveway with our specialized cleaning services',
    description: 'Your driveway is one of the first things people notice about your property. Over time, driveways collect dirt, oil stains, tire marks, and other stains that can make your home look neglected. Our professional driveway cleaning services in St. Catharines and throughout the Niagara region use specialized equipment and techniques to restore your driveway\'s appearance and help maintain your property\'s curb appeal.',
    heroImage: '{https://i.ytimg.com/vi/DqiktAd_hFg/maxresdefault.jpg}',
    features: [
      'Concrete driveway deep cleaning',
      'Asphalt surface cleaning',
      'Interlocking brick and paver cleaning',
      'Oil and grease stain treatment',
      'Tire mark removal',
      'Rust and discoloration treatment',
      'Optional sealing services',
      'Environmentally safe cleaning products'
    ],
    benefits: [
      {
        title: 'Improved Curb Appeal',
        description: 'A clean driveway significantly improves your property\'s appearance and makes a positive first impression on visitors and neighbors.'
      },
      {
        title: 'Property Value Protection',
        description: 'Regular driveway maintenance helps preserve your property\'s value and prevents costly repairs from neglect.'
      },
      {
        title: 'Stain Prevention',
        description: 'Professional cleaning removes contaminants before they can cause permanent staining or surface damage.'
      },
      {
        title: 'Extended Surface Life',
        description: 'Removing harmful substances like oil and chemicals helps extend the lifespan of your driveway surface.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Property Assessment',
        description: 'We evaluate your driveway\'s condition, surface material, and identify specific stains or problem areas.'
      },
      {
        step: 2,
        title: 'Pre-Treatment Application',
        description: 'Stubborn stains and heavily soiled areas receive targeted pre-treatment with appropriate cleaning solutions.'
      },
      {
        step: 3,
        title: 'Professional Cleaning',
        description: 'We use commercial-grade pressure washing equipment with proper techniques for your specific surface type.'
      },
      {
        step: 4,
        title: 'Quality Check',
        description: 'We inspect the completed work and address any remaining problem areas to ensure your satisfaction.'
      }
    ],
    faq: [
      {
        question: 'How often should I have my driveway professionally cleaned?',
        answer: 'Most driveways benefit from annual cleaning, though high-traffic areas or properties with frequent oil staining may need cleaning twice per year.'
      },
      {
        question: 'Can you remove old oil stains from my driveway?',
        answer: 'We can significantly improve the appearance of most oil stains using specialized degreasers and hot water extraction. Very old or set-in stains may not be completely removable, but we can usually make a noticeable improvement.'
      },
      {
        question: 'Will pressure washing damage my driveway surface?',
        answer: 'When performed by trained professionals using proper equipment and techniques, pressure washing is safe for concrete, asphalt, and interlocking surfaces. We adjust our methods based on your specific surface type.'
      },
      {
        question: 'Do you offer sealing services after cleaning?',
        answer: 'Yes, we offer optional sealing services that can help protect your newly cleaned driveway from future stains and weather damage. We can discuss this option during your estimate.'
      },
      {
        question: 'How long does the cleaning process take?',
        answer: 'Most residential driveways take 1-3 hours to clean, depending on size, condition, and the extent of staining. We\'ll provide a time estimate during your consultation.'
      }
    ],
    serviceAreas: [
      'St. Catharines driveway cleaning',
      'Niagara Falls concrete cleaning',
      'Welland asphalt cleaning',
      'Niagara-on-the-Lake driveway services',
      'Thorold pressure washing',
      'Grimsby driveway maintenance'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
