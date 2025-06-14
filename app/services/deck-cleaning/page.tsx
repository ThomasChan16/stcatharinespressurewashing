
import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Deck Cleaning St. Catharines | Professional Deck Restoration',
  description: 'Professional deck cleaning and restoration services in St. Catharines and Niagara region. Wood deck cleaning, composite deck maintenance. Free quotes.',
  keywords: 'deck cleaning St. Catharines, wood deck restoration Niagara, composite deck cleaning, deck pressure washing, deck maintenance',
}

export default function DeckCleaningPage() {
  const serviceData = {
    iconName: 'TreePine',
    title: 'Professional Deck Cleaning',
    subtitle: 'Restore and protect your outdoor living space',
    description: 'Your deck is an important part of your outdoor living space, but exposure to weather, foot traffic, and organic matter can leave it looking worn and discolored. Our professional deck cleaning services in St. Catharines and the Niagara region specialize in safely cleaning and restoring both wood and composite decks. We use appropriate techniques and cleaning solutions to remove dirt, mildew, and stains while protecting the integrity of your deck materials.',
    heroImage: '{https://www.thespruce.com/thmb/5n-v8EPYweOiPN-dTkjq8OCRBL8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1713265321-5c69e03646e0fb0001f934cb.jpg}',
    features: [
      'Wood deck deep cleaning',
      'Composite deck maintenance',
      'Mold and mildew removal',
      'Stain and discoloration treatment',
      'Gentle pressure washing techniques',
      'Deck brightening services',
      'Optional deck sealing/staining',
      'Railing and post cleaning'
    ],
    benefits: [
      {
        title: 'Restored Natural Beauty',
        description: 'Professional cleaning reveals the natural color and grain of wood decks, making them look fresh and inviting again.'
      },
      {
        title: 'Extended Deck Life',
        description: 'Regular cleaning removes harmful contaminants that can cause rot, decay, and premature aging of deck materials.'
      },
      {
        title: 'Safer Surface',
        description: 'Removing mold, mildew, and algae creates a safer, less slippery surface for your family and guests.'
      },
      {
        title: 'Preparation for Staining',
        description: 'Professional cleaning properly prepares your deck surface for staining or sealing, ensuring better adhesion and longer-lasting results.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Deck Assessment',
        description: 'We evaluate your deck\'s material, condition, and identify specific cleaning needs or problem areas.'
      },
      {
        step: 2,
        title: 'Furniture & Plant Protection',
        description: 'We move or protect deck furniture and cover nearby plants to prevent damage during cleaning.'
      },
      {
        step: 3,
        title: 'Specialized Cleaning',
        description: 'We apply appropriate cleaning solutions and use proper pressure washing techniques for your deck material.'
      },
      {
        step: 4,
        title: 'Final Inspection',
        description: 'We inspect the completed work and discuss optional sealing or staining services to protect your investment.'
      }
    ],
    faq: [
      {
        question: 'Can you clean both wood and composite decks?',
        answer: 'Yes, we have experience cleaning both wood and composite decking materials. We adjust our cleaning methods and solutions based on your specific deck type.'
      },
      {
        question: 'Will pressure washing damage my wood deck?',
        answer: 'When performed correctly with appropriate pressure settings and techniques, pressure washing is safe for wood decks. We use lower pressure and proper angles to avoid damage.'
      },
      {
        question: 'How often should I have my deck professionally cleaned?',
        answer: 'Most decks benefit from annual cleaning, especially before the peak outdoor season. Decks in shaded or humid areas may need more frequent cleaning.'
      },
      {
        question: 'Do you offer deck staining or sealing services?',
        answer: 'We focus on cleaning services, but we can recommend trusted local contractors for staining and sealing after your deck is properly cleaned.'
      },
      {
        question: 'Can you remove black spots and mildew from my deck?',
        answer: 'Yes, we can effectively remove most mold, mildew, and black spots using specialized cleaning solutions designed for deck surfaces.'
      },
      {
        question: 'How long does deck cleaning take?',
        answer: 'Most residential decks take 2-4 hours to clean thoroughly, depending on size, condition, and the extent of staining or buildup.'
      }
    ],
    serviceAreas: [
      'St. Catharines deck cleaning',
      'Niagara Falls deck restoration',
      'Welland deck maintenance',
      'Niagara-on-the-Lake deck services',
      'Thorold deck cleaning',
      'Grimsby deck washing'
    ]
  }

  return <ServiceDetailPage {...serviceData} />
}
